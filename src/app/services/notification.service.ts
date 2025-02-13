import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    constructor(private snackBar: MatSnackBar) { }

    success(message: string, duration: number = 3000000) {
        this.snackBar.open(message, 'X', {
            duration: duration,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['green-snackbar']
        });
    }

    error(message: string, duration: number = 3000000) {
        this.snackBar.open(message, 'X', {
            duration: duration,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['red-snackbar']
        });
    }
}
