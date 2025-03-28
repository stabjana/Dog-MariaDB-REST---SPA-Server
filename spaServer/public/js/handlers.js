import { fetchDogs, fetchDog, addDog, updateDog, deleteDog } from './api.js';

// get all dogs
export async function handleGetAllDogs() {
    const dogs = await fetchDogs();
    const resultSet = document.querySelector('#resultset');

    resultSet.innerHTML = dogs.map(dog => `
        <tr>
            <td>${dog.number}</td>
            <td>${dog.name}</td>
            <td>${dog.weightKg}</td>
            <td>${dog.breed}</td>
            <td>${dog.yearOfBirth}</td>
        </tr>
    `).join('');
}

// get one dog
export function handleGetOneDog() {
    document.querySelector("#getbutton").addEventListener("click", async () => {
        const number = document.querySelector("#dogNumber").value;
        const resultArea = document.querySelector("#resultarea");

        if (!number) {
            resultArea.innerHTML = "Please enter a dog number.";
            return;
        }

        const dog = await fetchDog(number);
        resultArea.innerHTML = dog ? `
            <p><strong>Name:</strong> ${dog.name}</p>
            <p><strong>Weight:</strong> ${dog.weightKg} kg</p>
            <p><strong>Breed:</strong> ${dog.breed}</p>
            <p><strong>Birth:</strong> ${dog.yearOfBirth}</p>
        ` : "Dog not found.";
    });
}

// add dog
export function handleAddDog() {
    document.querySelector("#form").addEventListener("submit", async (event) => {
        event.preventDefault();

        const dog = {
            number: document.querySelector("input[name='number']").value,
            name: document.querySelector("input[name='name']").value,
            weightKg: document.querySelector("input[name='weightKg']").value,
            breed: document.querySelector("input[name='breed']").value,
            birth: document.querySelector("input[name='birth']").value
        };

        const result = await addDog(dog);
        document.querySelector("#resultarea").innerHTML = result.message || "Dog added successfully!";
    });
}

// update dog

// fetches dog for update
export function handleFetchDogForUpdate() {
    document.querySelector("#fetchDogButton").addEventListener("click", async () => {
        const number = document.querySelector("#dogNumber").value;
        const resultArea = document.querySelector("#resultarea");
        const form = document.querySelector("#update-form");

        if (!number) {
            resultArea.innerHTML = "Please enter a dog number.";
            return;
        }

        const dog = await fetchDog(number);

        if (dog) {
            document.querySelector("input[name='name']").value = dog.name;
            document.querySelector("input[name='weightKg']").value = dog.weightKg;
            document.querySelector("input[name='breed']").value = dog.breed;
            document.querySelector("input[name='birth']").value = dog.yearOfBirth;

            form.style.display = "block";
        } else {
            resultArea.innerHTML = "Dog not found.";
        }
    });
}

// Saves changes
export function handleUpdateDog() {
    document.querySelector("#update-form").addEventListener("submit", async (event) => {
        event.preventDefault();

        const dog = {
            number: document.querySelector("#dogNumber").value,
            name: document.querySelector("input[name='name']").value,
            weightKg: document.querySelector("input[name='weightKg']").value,
            breed: document.querySelector("input[name='breed']").value,
            birth: document.querySelector("input[name='birth']").value
        };

        const result = await updateDog(dog);
        document.querySelector("#resultarea").innerHTML = result.message || "Dog updated successfully!";
    });
}


// remove dog
export function handleRemoveDog() {
    document.querySelector("#deleteButton").addEventListener("click", async () => {
        const number = document.querySelector("#dogNumber").value;
        const resultArea = document.querySelector("#resultarea");

        if (!number) {
            resultArea.innerHTML = "Please enter a dog number.";
            return;
        }

        const result = await deleteDog(number);
        resultArea.innerHTML = result.message || "Dog removed!";
    });
}
