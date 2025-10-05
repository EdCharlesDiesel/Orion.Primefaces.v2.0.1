// src/app/models/user.ts

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    name?: string; // Full name (optional, can be computed)
    username: string;
    email?: string;
    emailAddress?: string;
    idNumber?: string;
    phoneNumber?: string;

    // Profile information
    bio?: string;
    company?: string;
    position?: string;
    location?: string;
    website?: string;
    avatar?: string;

    // Preferences
    timezone?: string;
    language?: string;

    // Security & Access
    roles: string[];
    permissions?: string[];

    // Notifications
    notifications?: {
        email: boolean;
        push: boolean;
        sms: boolean;
        marketing: boolean;
    };

    // Privacy
    privacy?: {
        profileVisible: boolean;
        showEmail: boolean;
        showPhone: boolean;
    };

    // Timestamps
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLogin?: Date | string;

    // Additional fields
    [key: string]: any;
}

// Helper type for user updates
export type UserUpdate = Partial<Omit<User, 'id' | 'createdAt' | 'roles'>>;

// Helper type for user creation
export interface CreateUserDto {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    idNumber?: string;
    phoneNumber?: string;
    roles?: string[];
}

// Helper function to get full name
export function getUserFullName(user: User): string {
    if (user.name) return user.name;
    return `${user.firstName || ''} ${user.lastName || ''}`.trim();
}

// Helper function to check if user has role
export function userHasRole(user: User | null, role: string): boolean {
    return user?.roles?.includes(role) ?? false;
}

// Helper function to check if user has any role
export function userHasAnyRole(user: User | null, roles: string[]): boolean {
    if (!user?.roles) return false;
    return roles.some(role => user.roles.includes(role));
}
