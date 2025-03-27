'use strict';

const API_URL = "http://localhost:4000/api/dogs";

export async function fetchDogs() {
    const response = await fetch(API_URL);
    return response.json();
}

export async function fetchDog(number) {
    const response = await fetch(`${API_URL}/${number}`);
    return response.json();
}

export async function addDog(dog) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dog)
    });
    return response.json();
}

export async function updateDog(dog) {
    const response = await fetch(API_URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dog)
    });
    return response.json();
}

export async function deleteDog(number) {
    const response = await fetch(`${API_URL}/${number}`, {
        method: 'DELETE'
    });
    return response.json();
}