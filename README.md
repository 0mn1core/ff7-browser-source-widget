# FF7 Browser Source Widget

A browser based application to display a countdown timer inspired by the timers in FF7, to be used as a browser source for streaming.

## Download

The latest release for this repo (lower right side of main github page) includes the single HTML file necessary to use this in your OBS setup.

## Set-up

In OBS, find the `Sources` dock (or go to `Docks -> Sources` if it's not visible) and click the plus button in the lower left corner. Select `Browser` from the list of options. In the prompt that opens, select `Create New` and give it a name, then hit `OK`.

In the `Properties` dialogue that opens:
  * Check the `Local File` checkbox and use the `Local File` input to navigate to the downloaded HTML file.
  * Set `height` to `550`
  * Set `width` to `900`
  * Make sure the `Custom CSS` is set to: 
    ```
    body { 
      background-color: rgba(0, 0, 0, 0);
      margin: 0px auto;
      overflow: hidden;
    }
    ```
Once all that is set, hit `OK`.

Once the source is in your stream view, use `ALT + Click` on the lower edge to crop the source to only display the clock widget.

## Configuration

In the `Sources` dock, `Right Click` the source you set up and click on the `Interact` option. This will open an interaction pop up that allows you to interface with the application, with several controls.

### Countdown Time

Use this input to set the time of the clock. This accepts times in the formats:

  * `MM:SS` (e.g. 55:55)
  * `H:MM:SS` (e.g. 5:55:55)
  * `HH:MM:SS` (e.g. 55:55:55)
  * `HHH:MM:SS` (e.g. 555:55:55)

Setting the time will not start the clock, allowing you to set it up ahead of time.

To set the clock to a time with only single digit minutes or only seconds, enter the time with leading zeroes (e.g. `05:45` or `00:30`)
  
Setting the time will also increase the format of the clock to the minimum value necessary to display the entered time (e.g. The clock is set to only show minutes and seconds, but you enter in 12:34:56; the clock will change formats to `HH:MM:SS` to accomodate the hours.)

### Time display format

This dropdown lets you manually configure how many digits the clock displays, even when the time is of a smaller format. Options that would lead to the display being smaller than the current time are disabled.

IMPORTANT NOTE:
Dropdowns currently do not display in OBS:
https://obsproject.com/forum/threads/source-browser-select-dropdown-not-working.149942/
Until this is fixed, you will have `Left click` the dropdown and use the up and down arrow keys to select options, and hit `Enter` to confirm the option.

### Run clock

This button allows you to `Start` and `Stop` the countdown.

### Theme controls

These colored buttons allow you to set the display colors for the various elements of the clock. `Left Click` on a button to open a display that allows you to set the color using either the color picker or a hex code value (e.g. `#123abc`). Clicking outside the color picker box will close it.

#### Background color

The background color for the clock widget.

#### Inactive cathode color

The color of the inactive clock digits.

#### Active cathode color

The color of the active clock digits.
