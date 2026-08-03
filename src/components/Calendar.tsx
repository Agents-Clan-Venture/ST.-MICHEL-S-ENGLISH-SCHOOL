import React, { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// The types and constants remain the same
type CalendarEntry = {
  Date: number;
  Day: string | null;
  Note: string;
};

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Parses a CSV string into an array of CalendarEntry objects.
 * Assumes the CSV has headers: Date,Day,Occasion
 */
const parseCSV = (csvText: string): CalendarEntry[] => {
  return csvText
    .trim()
    .split("\n")
    .slice(1) // Skip header row
    .map((line) => {
      const [dateStr, day, ...rest] = line.split(",");
      // Rejoin and unquote so notes containing commas survive intact
      const occasion = rest.join(",").trim().replace(/^"|"$/g, "");
      return {
        Date: parseInt(dateStr, 10),
        Day: day?.trim() || null,
        Note: occasion.trim(),
      };
    })
    .filter((entry) => !isNaN(entry.Date)); // Filter out any invalid lines
};

/**
 * Groups a flat array of daily entries for the academic year (May '26 - Apr '27) into a per-month structure.
 */
const groupCalendarData = (data: CalendarEntry[]) => {
  const grouped: Record<string, CalendarEntry[]> = {};
  // Day counts for May '26 -> Apr '27
  const monthDayCounts = [
    31, // May '26
    30, // Jun '26
    31, // Jul '26
    31, // Aug '26
    30, // Sep '26
    31, // Oct '26
    30, // Nov '26
    31, // Dec '26
    31, // Jan '27
    28, // Feb '27 (2027 is not a leap year)
    31, // Mar '27
    30, // Apr '27
  ];
  let dataIndex = 0;

  for (let i = 0; i < 12; i++) {
    const month = (4 + i) % 12; // Start from May (index 4)
    const year = 2026 + Math.floor((4 + i) / 12);

    const dayCount = monthDayCounts[i];
    const monthEntries = data.slice(dataIndex, dataIndex + dayCount);

    const key = `${year}-${String(month + 1).padStart(2, "0")}`;
    grouped[key] = monthEntries;

    dataIndex += dayCount;
  }
  return grouped;
};

const CalendarGrid: React.FC = () => {
  // State for storing fetched data and loading status
  const [allCalendarData, setAllCalendarData] = useState<CalendarEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // State for calendar navigation and UI
  const today = new Date();
  // Set the calendar to start at May 2026
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(4); // 0-indexed: 4 is May
  const [selectedNote, setSelectedNote] = useState<string | null>(null);

  // Fetch and parse the CSV data on component mount (unchanged)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/calendarData.csv"); // Fetches from the public folder
        if (!response.ok)
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        const csvText = await response.text();
        const parsedData = parseCSV(csvText);
        setAllCalendarData(parsedData);
      } catch (error) {
        console.error("Failed to fetch or parse calendar data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []); // The empty dependency array ensures this runs only once

  // Memoize the grouped data to prevent re-computation on every render
  const groupedData = useMemo(() => {
    if (allCalendarData.length === 0) return {};
    return groupCalendarData(allCalendarData);
  }, [allCalendarData]);

  // Helper functions
  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();
  const getStartDayIndex = (year: number, month: number) =>
    new Date(year, month, 1).getDay();
  const getMonthData = (year: number, month: number): CalendarEntry[] => {
    const key = `${year}-${String(month + 1).padStart(2, "0")}`;
    return groupedData[key] || [];
  };

  // Navigation functions with updated boundaries
  const goToPreviousMonth = () => {
    if (currentYear === 2026 && currentMonth === 4) return; // Stop at May 2026
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    if (currentMonth === 0) setCurrentYear(currentYear - 1);
    setSelectedNote(null);
  };

  const goToNextMonth = () => {
    if (currentYear === 2027 && currentMonth === 3) return; // Stop at April 2027
    setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
    if (currentMonth === 11) setCurrentYear(currentYear + 1);
    setSelectedNote(null);
  };

  // Prepare data for rendering the grid
  const data = getMonthData(currentYear, currentMonth);
  const startDayIndex = getStartDayIndex(currentYear, currentMonth);
  const totalDays = getDaysInMonth(currentYear, currentMonth);

  const cells: (CalendarEntry | null)[] = Array(startDayIndex).fill(null);
  for (let day = 1; day <= totalDays; day++) {
    const entry = data.find((e) => e.Date === day);
    cells.push(entry || { Date: day, Day: "", Note: "" });
  }

  const totalCells = Math.ceil(cells.length / 7) * 7;
  while (cells.length < totalCells) cells.push(null);

  // Update button disabling logic for the new date range
  const isPreviousDisabled = currentYear === 2026 && currentMonth === 4;
  const isNextDisabled = currentYear === 2027 && currentMonth === 3;

  if (isLoading) {
    return (
      <div className="text-center p-10 font-semibold text-lg">
        Loading Calendar... 🗓️
      </div>
    );
  }

  return (
    <div className="max-w-5xl relative mx-auto p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goToPreviousMonth}
          disabled={isPreviousDisabled}
          className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
            isPreviousDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#1e3a8a] text-white hover:bg-accent"
          }`}
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          <p className="md:block hidden">Previous</p>
        </button>

        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1e3a8a]">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <p className="text-sm text-gray-600 mt-1">St. Michel's Calendar</p>
        </div>

        <button
          onClick={goToNextMonth}
          disabled={isNextDisabled}
          className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
            isNextDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#1e3a8a] text-white hover:bg-accent"
          }`}
        >
          <p className="md:block hidden">Next</p>
          <ChevronRight className="w-5 h-5 ml-1" />
        </button>
      </div>

      {/* Selected Note Display */}
      {selectedNote && (
        <div className="mb-4 bg-blue-50 border-l-4 border-blue-500 text-blue-900 p-3 rounded-md shadow-sm text-sm sm:text-base">
          {selectedNote}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 bg-gray-100 rounded-lg p-2 sm:p-4 shadow-md">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-center font-semibold text-gray-700 uppercase text-xs sm:text-sm py-1"
          >
            {day}
          </div>
        ))}

        {cells.map((entry, idx) => {
          const isToday =
            entry &&
            currentYear === today.getFullYear() &&
            currentMonth === today.getMonth() &&
            entry.Date === today.getDate();

          return (
            <button
              key={idx}
              onClick={() => entry && setSelectedNote(entry.Note)}
              className={`aspect-square w-full border rounded-lg text-xs sm:text-sm p-1 flex flex-col items-start justify-start overflow-hidden transition-all duration-150 ${
                entry
                  ? `hover:shadow-md text-left ${
                      entry.Note.toLowerCase().includes("holiday")
                        ? "bg-red-200 border-red-500"
                        : entry.Note == ""
                        ? "bg-white"
                        : "bg-green-200 border-green-600"
                    } ${isToday ? "ring-2 ring-blue-500" : ""}`
                  : "bg-gray-50"
              }`}
            >
              {entry && (
                <>
                  <span
                    className={`font-semibold ${
                      isToday ? "text-blue-700" : "text-gray-700"
                    }`}
                  >
                    {entry.Date}
                  </span>
                  {entry.Note && (
                    <span className="hidden sm:block text-[10px] leading-tight text-gray-700 mt-0.5 line-clamp-3">
                      {entry.Note}
                    </span>
                  )}
                </>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
