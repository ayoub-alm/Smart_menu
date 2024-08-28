import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Set a key-value pair in local storage
  setItem(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  // Get a value by key from local storage
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Remove an item from local storage by key
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all items in local storage
  clear(): void {
    localStorage.clear();
  }

  // Check if a key exists in local storage
  hasKey(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}
