const database = {
    pets: [
        { id: 1, name: "Max", type: "dog", breed: "Golden Retriever", hunger: 50, happiness: 70, energy: 80, lastFedAt: "2023-06-07T10:00:00Z", lastPlayedAt: "2023-06-07T12:00:00Z", lastSleptAt: "2023-06-07T08:00:00Z", ownerId: 1 },
        { id: 2, name: "Luna", type: "cat", breed: "Siamese", hunger: 40, happiness: 60, energy: 70, lastFedAt: "2023-06-07T09:30:00Z", lastPlayedAt: "2023-06-07T11:00:00Z", lastSleptAt: "2023-06-07T07:00:00Z", ownerId: 2 },
        { id: 3, name: "Charlie", type: "dog", breed: "Labrador Retriever", hunger: 60, happiness: 80, energy: 90, lastFedAt: "2023-06-07T11:00:00Z", lastPlayedAt: "2023-06-07T13:00:00Z", lastSleptAt: "2023-06-07T09:00:00Z", ownerId: 3 },
        { id: 4, name: "Bella", type: "cat", breed: "Persian", hunger: 30, happiness: 50, energy: 60, lastFedAt: "2023-06-07T08:00:00Z", lastPlayedAt: "2023-06-07T10:00:00Z", lastSleptAt: "2023-06-07T06:00:00Z", ownerId: 4 },
        { id: 5, name: "Rocky", type: "dog", breed: "German Shepherd", hunger: 70, happiness: 90, energy: 100, lastFedAt: "2023-06-07T12:00:00Z", lastPlayedAt: "2023-06-07T14:00:00Z", lastSleptAt: "2023-06-07T10:00:00Z", ownerId: 5 },
        { id: 6, name: "Lucy", type: "cat", breed: "Maine Coon", hunger: 20, happiness: 40, energy: 50, lastFedAt: "2023-06-07T07:00:00Z", lastPlayedAt: "2023-06-07T09:00:00Z", lastSleptAt: "2023-06-07T05:00:00Z", ownerId: 6 },
        { id: 7, name: "Cooper", type: "dog", breed: "Bulldog", hunger: 80, happiness: 100, energy: 110, lastFedAt: "2023-06-07T13:00:00Z", lastPlayedAt: "2023-06-07T15:00:00Z", lastSleptAt: "2023-06-07T11:00:00Z", ownerId: 7 },
        { id: 8, name: "Kitty", type: "cat", breed: "Scottish Fold", hunger: 10, happiness: 30, energy: 40, lastFedAt: "2023-06-07T06:00:00Z", lastPlayedAt: "2023-06-07T08:00:00Z", lastSleptAt: "2023-06-07T04:00:00Z", ownerId: 8 },
        { id: 9, name: "Buddy", type: "dog", breed: "Poodle", hunger: 90, happiness: 110, energy: 120, lastFedAt: "2023-06-07T14:00:00Z", lastPlayedAt: "2023-06-07T16:00:00Z", lastSleptAt: "2023-06-07T12:00:00Z", ownerId: 9 },
        { id: 10, name: "Nala", type: "cat", breed: "Sphynx", hunger: 0, happiness: 20, energy: 30, lastFedAt: "2023-06-07T05:00:00Z", lastPlayedAt: "2023-06-07T07:00:00Z", lastSleptAt: "2023-06-07T03:00:00Z", ownerId: 10 },
        { id: 11, name: "Duke", type: "dog", breed: "Rottweiler", hunger: 100, happiness: 120, energy: 130, lastFedAt: "2023-06-07T15:00:00Z", lastPlayedAt: "2023-06-07T17:00:00Z", lastSleptAt: "2023-06-07T13:00:00Z", ownerId: 11 },
        { id: 12, name: "Loki", type: "cat", breed: "Bengal", hunger: 10, happiness: 30, energy: 40, lastFedAt: "2023-06-07T06:00:00Z", lastPlayedAt: "2023-06-07T08:00:00Z", lastSleptAt: "2023-06-07T04:00:00Z", ownerId: 12 },
        { id: 13, name: "Sadie", type: "dog", breed: "Boxer", hunger: 110, happiness: 130, energy: 140, lastFedAt: "2023-06-07T16:00:00Z", lastPlayedAt: "2023-06-07T18:00:00Z", lastSleptAt: "2023-06-07T14:00:00Z", ownerId: 13 },
        { id: 14, name: "Milo", type: "cat", breed: "Russian Blue", hunger: 20, happiness: 40, energy: 50, lastFedAt: "2023-06-07T07:00:00Z", lastPlayedAt: "2023-06-07T09:00:00Z", lastSleptAt: "2023-06-07T05:00:00Z", ownerId: 14 },
        { id: 15, name: "Daisy", type: "dog", breed: "Beagle", hunger: 120, happiness: 140, energy: 150, lastFedAt: "2023-06-07T17:00:00Z", lastPlayedAt: "2023-06-07T19:00:00Z", lastSleptAt: "2023-06-07T15:00:00Z", ownerId: 15 },
        { id: 16, name: "Simba", type: "cat", breed: "Abyssinian", hunger: 30, happiness: 50, energy: 60, lastFedAt: "2023-06-07T08:00:00Z", lastPlayedAt: "2023-06-07T10:00:00Z", lastSleptAt: "2023-06-07T06:00:00Z", ownerId: 16 },
        { id: 17, name: "Molly", type: "dog", breed: "Dalmatian", hunger: 130, happiness: 150, energy: 160, lastFedAt: "2023-06-07T18:00:00Z", lastPlayedAt: "2023-06-07T20:00:00Z", lastSleptAt: "2023-06-07T16:00:00Z", ownerId: 17 },
        { id: 18, name: "Oscar", type: "cat", breed: "British Shorthair", hunger: 40, happiness: 60, energy: 70, lastFedAt: "2023-06-07T09:00:00Z", lastPlayedAt: "2023-06-07T11:00:00Z", lastSleptAt: "2023-06-07T07:00:00Z", ownerId: 18 },
        { id: 19, name: "Roxy", type: "dog", breed: "Siberian Husky", hunger: 140, happiness: 160, energy: 170, lastFedAt: "2023-06-07T19:00:00Z", lastPlayedAt: "2023-06-07T21:00:00Z", lastSleptAt: "2023-06-07T17:00:00Z", ownerId: 19 },
        { id: 20, name: "Whiskers", type: "cat", breed: "American Shorthair", hunger: 50, happiness: 70, energy: 80, lastFedAt: "2023-06-07T10:00:00Z", lastPlayedAt: "2023-06-07T12:00:00Z", lastSleptAt: "2023-06-07T08:00:00Z", ownerId: 20 }
    ],
    owners: [
        { id: 1, name: "Alice", email: "alice@example.com", registeredAt: "2023-06-01T00:00:00Z" },
        { id: 2, name: "Bob", email: "bob@example.com", registeredAt: "2023-06-02T00:00:00Z" },
        { id: 3, name: "Charlie", email: "charlie@example.com", registeredAt: "2023-06-03T00:00:00Z" },
        { id: 4, name: "Diana", email: "diana@example.com", registeredAt: "2023-06-04T00:00:00Z" },
        { id: 5, name: "Ethan", email: "ethan@example.com", registeredAt: "2023-06-05T00:00:00Z" },
        { id: 6, name: "Fiona", email: "fiona@example.com", registeredAt: "2023-06-06T00:00:00Z" },
        { id: 7, name: "George", email: "george@example.com", registeredAt: "2023-06-07T00:00:00Z" },
        { id: 8, name: "Hannah", email: "hannah@example.com", registeredAt: "2023-06-08T00:00:00Z" },
        { id: 9, name: "Isaac", email: "isaac@example.com", registeredAt: "2023-06-09T00:00:00Z" },
        { id: 10, name: "Julia", email: "julia@example.com", registeredAt: "2023-06-10T00:00:00Z" },
        { id: 11, name: "Kevin", email: "kevin@example.com", registeredAt: "2023-06-11T00:00:00Z" },
        { id: 12, name: "Lily", email: "lily@example.com", registeredAt: "2023-06-12T00:00:00Z" },
        { id: 13, name: "Mike", email: "mike@example.com", registeredAt: "2023-06-13T00:00:00Z" },
        { id: 14, name: "Nancy", email: "nancy@example.com", registeredAt: "2023-06-14T00:00:00Z" },
        { id: 15, name: "Oliver", email: "oliver@example.com", registeredAt: "2023-06-15T00:00:00Z" },
        { id: 16, name: "Penny", email: "penny@example.com", registeredAt: "2023-06-16T00:00:00Z" },
        { id: 17, name: "Quinn", email: "quinn@example.com", registeredAt: "2023-06-17T00:00:00Z" },
        { id: 18, name: "Rachel", email: "rachel@example.com", registeredAt: "2023-06-18T00:00:00Z" },
        { id: 19, name: "Steve", email: "steve@example.com", registeredAt: "2023-06-19T00:00:00Z" },
        { id: 20, name: "Tina", email: "tina@example.com", registeredAt: "2023-06-20T00:00:00Z" }
    ],
    activities: [
        { id: 1, name: "Fetch", type: "play", duration: 15, energyCost: 10, happinessGain: 20 },
        { id: 2, name: "Walk", type: "play", duration: 30, energyCost: 20, happinessGain: 30 },
        { id: 3, name: "Treat", type: "feed", hungerReduction: 30, happinessGain: 10 },
        { id: 4, name: "Groom", type: "care", duration: 20, happinessGain: 15 },
        { id: 5, name: "Cuddle", type: "play", duration: 10, energyCost: 5, happinessGain: 25 },
        { id: 6, name: "Nap", type: "rest", duration: 60, energyGain: 40 },
        { id: 7, name: "Train", type: "play", duration: 25, energyCost: 15, happinessGain: 20 },
        { id: 8, name: "Play with Toy", type: "play", duration: 20, energyCost: 12, happinessGain: 18 },
        { id: 9, name: "Scratch Post", type: "play", duration: 10, energyCost: 8, happinessGain: 15 },
        { id: 10, name: "Laser Chase", type: "play", duration: 15, energyCost: 12, happinessGain: 22 }
    ],
    items: [
        { id: 1, name: "Chew Toy", description: "A durable chew toy for pets to play with.", price: 10, durability: 100, happinessBoost: 15 },
        { id: 2, name: "Cozy Bed", description: "A comfortable bed for pets to sleep in.", price: 25, durability: 200, energyBoost: 20 },
        { id: 3, name: "Treat Dispenser", description: "A toy that dispenses treats when played with.", price: 15, durability: 80, hungerReduction: 10, happinessBoost: 10 },
        { id: 4, name: "Grooming Brush", description: "A brush to keep your pet's coat clean and shiny.", price: 8, durability: 150, happinessBoost: 5 },
        { id: 5, name: "Scratching Post", description: "A post for cats to scratch and keep their claws healthy.", price: 20, durability: 180, happinessBoost: 12 },
        { id: 6, name: "Laser Pointer", description: "A laser pointer toy for interactive playtime.", price: 5, durability: 50, energyCost: 5, happinessBoost: 8 },
        { id: 7, name: "Plush Mouse", description: "A soft plush mouse toy for cats to play with.", price: 6, durability: 70, happinessBoost: 10 },
        { id: 8, name: "Tennis Ball", description: "A classic tennis ball for dogs to fetch and play with.", price: 3, durability: 40, energyCost: 8, happinessBoost: 12 },
        { id: 9, name: "Food Bowl", description: "A durable food bowl for pets to eat from.", price: 12, durability: 300 },
        { id: 10, name: "Water Fountain", description: "A water fountain to keep pets hydrated and encourage drinking.", price: 30, durability: 250 }
    ],
    activityLog: [
        { id: 1, petId: 1, activityId: 1, itemId: 8, date_created: "2023-06-08T09:00:00Z" },
        { id: 2, petId: 3, activityId: 2, itemId: null, date_created: "2023-06-08T10:30:00Z" },
        { id: 3, petId: 2, activityId: 3, itemId: 3, date_created: "2023-06-08T11:15:00Z" },
        { id: 4, petId: 5, activityId: 4, itemId: 4, date_created: "2023-06-08T12:00:00Z" },
        { id: 5, petId: 4, activityId: 5, itemId: null, date_created: "2023-06-08T13:45:00Z" },
        { id: 6, petId: 6, activityId: 6, itemId: 2, date_created: "2023-06-08T14:30:00Z" },
        { id: 7, petId: 7, activityId: 7, itemId: null, date_created: "2023-06-08T15:00:00Z" },
        { id: 8, petId: 8, activityId: 8, itemId: 7, date_created: "2023-06-08T16:15:00Z" },
        { id: 9, petId: 9, activityId: 9, itemId: 5, date_created: "2023-06-08T17:30:00Z" },
        { id: 10, petId: 10, activityId: 10, itemId: 6, date_created: "2023-06-08T18:00:00Z" },
        { id: 11, petId: 1, activityId: 3, itemId: 3, date_created: "2023-06-08T19:00:00Z" },
        { id: 12, petId: 3, activityId: 6, itemId: 2, date_created: "2023-06-08T20:30:00Z" },
        { id: 13, petId: 2, activityId: 5, itemId: null, date_created: "2023-06-08T21:15:00Z" },
        { id: 14, petId: 5, activityId: 8, itemId: 7, date_created: "2023-06-08T22:00:00Z" },
        { id: 15, petId: 4, activityId: 1, itemId: 8, date_created: "2023-06-08T23:45:00Z" }
      ]
}


export const getPets = () => {
    return database.pets.map(pet => ({ ...pet }))
}

export const getOwners = () => {
    return database.owners.map(owner => ({ ...owner }))
}

export const getActivities = () => {
    return database.activities.map(activity => ({ ...activity }))
}

export const getItems = () => {
    return database.items.map(item => ({ ...item }))
}

export const getActivityLog = () => {
    return database.activityLog.map(log => ({ ...log }))
}

// A function that returns activity log objects, but also with embedded activity, pet, and item objects
export const getActivityLogExpanded = () => {
    return database.activityLog.map(log => {
        const expandedLog = { ...log }
        expandedLog.activity = database.activities.find(activity => activity.id === log.activityId)
        expandedLog.pet = database.pets.find(pet => pet.id === log.petId)
        expandedLog.item = log.itemId ? database.items.find(item => item.id === log.itemId) : null
        return expandedLog
    })
}
