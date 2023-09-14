// Add habit to store & update local storage
export function addHabit(habit) {
  this.habits.push(habit);
  localStorage.setItem('habits', JSON.stringify(this.habits));
}

// Get the active habits for the displayed date
export function getHabitsForDate(date = new Date()) {
  // Create date object with new format (no time)
  const currentDateWithoutTime = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
  // Formats date to get the day name
  const formattedDate = currentDateWithoutTime.toLocaleDateString('en-US', {
    weekday: 'long',
  });

  // Filtered habits active for the current date in view & not stopped, or stopped after current date
  return this.habits.filter(
    (habit) =>
      habit.activeDays.includes(formattedDate) &&
      (!habit.stoppedDate ||
        new Date(habit.stoppedDate) > currentDateWithoutTime),
  );
}

// Mark a habit as completed or not for specific date.
export function markHabitCompleted(habitName, date) {
  // Convert the display date to a Date object for comparison
  const displayDate = new Date(date);
  // Create a new Date object for today & set time to 0
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // If the given date is in the future, exit the function
  if (displayDate > today) {
    alert('Cannot mark habit for a future date.');
    return;
  }
  // Find the habit in the store's state
  const habit = this.habits.find((h) => h.name === habitName);

  if (habit) {
    // Initialize completions object if it doesn't exist
    habit.completions = habit.completions || {};
    // Toggle the completion status for the given date
    habit.completions[date] = !habit.completions[date];
    // Update the habits list in local storage
    localStorage.setItem('habits', JSON.stringify(this.habits));
  }
}

// Delete habit from the store and update local storage.
export function deleteHabit(habitToDelete) {
  // Find the index of the habit to delete
  const indexToDelete = this.habits.findIndex(
    (habit) => habit.name === habitToDelete.name,
  );
  if (indexToDelete !== -1) {
    // Remove the habit from the habits array
    this.habits.splice(indexToDelete, 1);
    // Update the habits list in local storage
    localStorage.setItem('habits', JSON.stringify(this.habits));
  }
}

// Updates specific habit in the store & save changes to local storage
export function editHabit(editedHabit) {
  if (!editedHabit) {
    return;
  }
  // Find the index of the habit to edit by id
  const index = this.habits.findIndex((habit) => habit.id === editedHabit.id);

  if (index !== -1) {
    // Replace the existing habit with the edited one
    this.habits.splice(index, 1, editedHabit);
    // Update the habits list in local storage
    localStorage.setItem('habits', JSON.stringify(this.habits));
  }
}

// Update stop status in the store & save to local storage
export function stopHabit(habitToStop) {
  // Find the habit to stop in the store's state
  const habit = this.habits.find((h) => h.name === habitToStop.name);
  if (habit) {
    // Mark the habit's stoppedDate as today
    habit.stoppedDate = new Date();
    // Update the habits list in local storage
    localStorage.setItem('habits', JSON.stringify(this.habits));
  }
}
