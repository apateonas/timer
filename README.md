# timer
----------------------------
The goal is to create a timer app for Grisha that will help him grasp how much time is
left with relateable units. For example, 20 minutes is like two youtube videos. 1 hour 
is like a shitty lecture.

##API:
----------------------------
- `startTimer("ms")` Begins times for set hours, minutes, and seconds
- `cancelTimer()` Cancels timer
- `getTimerState()` Returns "active", "inactive", or "finished"
- `about()` Returns name and version
- `getTimeRemainig()` Returns time remaining in milliseconds

