import { Assignment, ButtonType } from "midi-mixer-plugin";

/**
 * Example of retrieving the plugin's settings.
 */
$MM.getSettings().then((settings) => {
  console.log("settings:", settings);
});

/**
 * Example of setting up an assignment to be controlled by the plugin.
 */
const example = new Assignment("foo", {
  name: "Example Plugin Entry",
});

/**
 * Rename the assignment.
 */
example.name = "Example Plugin Entry";

/**
 * Set the assignment's peak meter value to 50% for 150ms.
 */
example.meter = 0.5;

/**
 * Sets the minimum amount of time in milliseconds between volume change updates
 * from MIDI Mixer to 50 milliseconds.
 */
example.throttle = 50;

/**
 * When the user tries to change the volume of the assignment...
 */
example.on("volumeChanged", (level: number) => {
  /**
   * Sets the volume indicator to the new level.
   */
  example.volume = level;
});

/**
 * When the user presses the "mute" button for this assignment...
 */
example.on("mutePressed", () => {
  /**
   * Toggles the "muted" indicator.
   */
  example.muted = !example.muted;
});

/**
 * When the user presses the "assign" button for this assignment...
 */
example.on("assignPressed", () => {
  /**
   * Toggles the "assigned" indicator.
   */
  example.assigned = !example.assigned;
});

/**
 * When the user presses the "run" button for this assignment...
 */
example.on("runPressed", () => {
  /**
   * Toggles the "running" indicator.
   */
  example.running = !example.running;
});

/**
 * Example of setting up a button type to be controlled by the plugin.
 */
const typeExample = new ButtonType("bar", {
  name: "Example Button Type",
});

/**
 * When the user presses the button...
 */
typeExample.on("pressed", () => {
  /**
   * Toggles the button's indicator.
   */
  typeExample.active = !typeExample.active;
});

/**
 * Example of settings buttons and statuses to show the status of the plugin
 * on the settings page.
 *
 * We use the keys defined in the `settings` object of our `package.json` in
 * order to react to UI button presses and set resulting statuses.
 *
 * Using this is great for showing anything from "Connected" statuses to error
 * messages to your end users.
 */
$MM.onSettingsButtonPress("run", () => {
  $MM.setSettingsStatus("status", "Running...");

  setTimeout(() => {
    $MM.setSettingsStatus("status", "Done");
  }, 1000);
});
