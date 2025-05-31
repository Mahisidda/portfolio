"use client"; // Required for components using hooks like useState, useEffect

import React, { useState, useEffect } from 'react';

// Define a more vibrant color scale (adjust these to your preference)
const contributionColors = [
  '#161b22', // Empty - GitHub standard dark mode empty day
  '#0e4429', // Level 1
  '#006d32', // Level 2
  '#26a641', // Level 3
  '#39d353', // Level 4
];

// Helper function to get color based on contribution count
const getColorForContributions = (count) => {
  if (count === 0) return contributionColors[0];
  if (count <= 2) return contributionColors[1];
  if (count <= 5) return contributionColors[2];
  if (count <= 10) return contributionColors[3];
  return contributionColors[4];
};

const GitHubContributions = () => {
  const [calendar, setCalendar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch('/api/github-contributions');
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || `Error: ${res.status}`);
        }
        const data = await res.json();
        setCalendar(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []); // Fetch data once on mount

  if (loading) return <p className="text-center text-slate-400 py-8">Loading contributions...</p>;
  if (error) return <p className="text-center text-red-400 py-8">Error: {error}</p>;
  if (!calendar || !calendar.weeks || calendar.weeks.length === 0) return <p className="text-center text-slate-400 py-8">No contribution data available.</p>;

  const displayWeekDays = ['', 'Mon', '', 'Wed', '', 'Fri', '']; // Labels for Mon, Wed, Fri
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const monthMarkers = [];
  let lastMonth = -1;

  calendar.weeks.forEach((week, weekIndex) => {
    if (week.contributionDays.length > 0) {
      const firstDayOfDataInWeek = week.contributionDays.find(day => day.date); // Ensure there's a valid date
      if (firstDayOfDataInWeek) {
        const firstDayMonth = new Date(firstDayOfDataInWeek.date).getMonth();
        if (firstDayMonth !== lastMonth) {
          // Add month marker if it's a new month and not too close to the previous one
          // Adjusted spacing logic: check if at least 4 weeks passed or it's the first marker
          if (monthMarkers.length === 0 || weekIndex > (monthMarkers[monthMarkers.length - 1]?.weekIndex + 3)) { 
              monthMarkers.push({ name: monthNames[firstDayMonth], weekIndex });
          }
          lastMonth = firstDayMonth;
        }
      }
    }
  });

  const squareSize = 'w-[11px] h-[11px]'; // Slightly larger squares
  const squareGap = 'gap-0.5'; // Tailwind class for 2px gap
  const dayLabelSize = 'h-[11px]'; // Match square height

  return (
    <div className="p-3 bg-[#3A414C] text-xs w-full max-w-5xl mx-auto rounded-lg shadow-md">
      {/* Top section: Total contributions and year */} 
      <div className="flex justify-between items-center mb-2 px-1">
        <h3 className="text-xs font-medium text-slate-100">
          {calendar.totalContributions} contributions in {currentYear}
        </h3>
        {/* Optional: Contribution settings dropdown could go here if needed */}
      </div>

      {/* Graph Area */} 
      <div className="relative">
        {/* Month Markers: Positioned above the scrollable area. Adjust ml to align with the start of the grid data. */}
        <div className={`flex h-4 mb-1 ml-[calc(24px+0.375rem)]`}> {/* 24px for labels width + 0.375rem for mr-1.5 on labels container */}
          {monthMarkers.map((month) => (
            <div 
              key={month.name + month.weekIndex}
              className="text-[9px] text-slate-400 absolute"
              style={{ left: `${(month.weekIndex / calendar.weeks.length) * 100}%` }}
            >
              {month.name}
            </div>
          ))}
        </div>

        {/* This flex container handles the sticky labels and scrollable grid */}
        <div className="flex overflow-x-auto styled-scrollbar pb-2">
          {/* Weekday Labels: Sticky to the left */}
          <div className={`sticky left-0 z-10 bg-[#3A414C] grid grid-rows-7 ${squareGap} mr-1.5 w-[24px]`}>
            {displayWeekDays.map((dayLabel, index) => (
              <div 
                key={index} 
                className={`${dayLabelSize} text-[9px] text-slate-400 flex items-center ${dayLabel ? '' : 'opacity-0'}`}>
                {dayLabel}
              </div>
            ))}
          </div>
          {/* Contribution Grid: Scrolls horizontally */}
          <div className={`grid grid-flow-col auto-cols-max ${squareGap} bg-[#0d1117] p-0.5 rounded`}> {/* Sharper corners for squares by rounding container */} 
            {calendar.weeks.map((week, weekIndex) => (
                <div key={`week-${weekIndex}`} className={`grid grid-rows-7 ${squareGap}`}>
                {week.contributionDays.map((day, dayIndex) => {
                    const bgColor = day ? getColorForContributions(day.contributionCount) : contributionColors[0];
                    return (
                    <div
                        key={day ? day.date : `empty-${weekIndex}-${dayIndex}`}
                        className={`${squareSize} rounded-[2px] transition-transform duration-100 ease-out hover:scale-125`}
                        style={{ backgroundColor: bgColor }}
                        title={day ? `${day.contributionCount} contributions on ${day.date}` : 'No data'}
                    ></div>
                    );
                })}
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Legend and Link */} 
      <div className="flex justify-between items-center mt-2.5 px-1">
        <a 
          href="https://github.com/Mahisidda" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[9px] text-slate-400 hover:text-slate-200 hover:underline transition-colors"
        >
          View my GitHub
        </a>
        <div className="flex items-center">
          <span className="mr-1.5 text-[9px] text-slate-400">Less</span>
          <div 
            className="w-16 h-[10px] rounded-sm border border-gray-700/50"
            style={{
                background: `linear-gradient(to right, ${contributionColors.slice(1).join(', ')})` // Start gradient from L1 color
            }}
          ></div>
          <span className="ml-1.5 text-[9px] text-slate-400">More</span>
        </div>
      </div>
    </div>
  );
};

export default GitHubContributions; 