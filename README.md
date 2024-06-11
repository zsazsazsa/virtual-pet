# Virtual Pet Activity Log

## Feature: Pet Selection

As a user, I want to be able to select a pet from a list of available pets, so that I can choose which pet to interact with.

### Scenario: User selects a pet

**Given** the user is on the pet selection screen <br />
**When** the user clicks on a pet button <br />
**Then** the selected pet's name should be displayed in an alert message <br />

## Feature: Item Selection

As a user, I want to be able to select an item from a list of available items, so that I can choose which item to use with my selected pet.

### Scenario: User selects an item

**Given** the user is on the item selection screen <br />
**When** the user selects an item from the radio button list <br />
**Then** the selected item's name should be displayed in an alert message <br />

## Feature: Activity Selection

As a user, I want to be able to select an activity from a dropdown list, so that I can choose which activity to perform with my selected pet.

### Scenario: User selects an activity

**Given** the user is on the activity selection screen <br />
**When** the user selects an activity from the dropdown list <br />
**Then** the selected activity's name should be displayed in an alert message <br />

## Feature: Create Activity Log Entry

As a user, I want to be able to create a new activity log entry, so that I can record the activities performed with my selected pet.

### Scenario: User creates a new activity log entry

**Given** the user is on the main screen<br />
**And** there is a "Create Log Entry" button available<br />
**When** the user clicks the "Create Log Entry" button<br />
**Then** you should ask the user to confirm their choices by displaying them in a `window.confirm` dialog

**Given** the user has selected the pet, activity, and item<br />
**When** clicks the "Save" or "Confirm" button<br />
**And** the user confirms the log entry details<br />
**Then** a new activity log entry should be created with the provided details<br />
**And** the user should see a confirmation message indicating the successful creation of the log entry<br />
**And** the newly created log entry should appear in the activity log, styled consistently with the existing entries

## Feature: Create Log Entry Button

As a user, I want to have a clearly visible "Create Log Entry" button, so that I can easily initiate the process of creating a new activity log entry.

### Scenario: User sees the "Create Log Entry" button

**Given** the user is on the main screen<br />
**Then** there should be a clearly visible "Create Log Entry" button<br />
**And** the button should be positioned in a logical and easily accessible location<br />


## Feature: Activity Log

As a user, I want to be able to view a log of all the activities performed with pets, so that I can keep track of the interactions.

### Scenario: User views the activity log

**Given** the user has performed activities with pets <br />
**When** the user navigates to the activity log section <br />
**Then** the user should see a list of activity log entries <br />
And each log entry should display the pet name, owner name, activity, items used, and a human-readable date/time

## Feature: Activity Log Styling

As a user, I want the activity log entries to have a modern, minimal, and clean card-like appearance, so that the log is visually appealing and easy to read.

### Scenario: User views the styled activity log

**Given** the user is viewing the activity log <br />
**When** the user looks at the log entries <br />
**Then** each log entry should appear as a card with a defined and sharp border <br />
**And** the background color of the cards should be an ivory shade <br />
**And** the cards should have appropriate spacing and hover <br /> effects for better readability