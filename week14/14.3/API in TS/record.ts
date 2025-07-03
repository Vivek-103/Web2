// ----------------------------
// 📘 What is Record<K, T> in TypeScript?
// ----------------------------
// `Record<K, T>` is a utility type that constructs an object type
// with keys of type `K` and values of type `T`.
//
// It is useful when you want to create **typed maps** or dictionaries,
// where each key is known and has a consistent value type.

// ----------------------------
// Define possible user roles using a union type
// ----------------------------
type UserRole = 'admin' | 'editor' | 'viewer';

// ----------------------------
// Define a type for the value associated with each role
// ----------------------------
interface Permissions {
  canEdit: boolean;
  canDelete: boolean;
  canView: boolean;
}

// ----------------------------
// Use `Record` to create a role-permission mapping
// ----------------------------
// This creates a type where each key is a `UserRole` and each value is a `Permissions` object
const rolePermissions: Record<UserRole, Permissions> = {
  admin: {
    canEdit: true,
    canDelete: true,
    canView: true,
  },
  editor: {
    canEdit: true,
    canDelete: false,
    canView: true,
  },
  viewer: {
    canEdit: false,
    canDelete: false,
    canView: true,
  },
};

// ----------------------------
// Function to check if a role has a specific permission
// ----------------------------
const hasPermission = (role: UserRole, action: keyof Permissions): boolean => {
  return rolePermissions[role][action];
};

// ----------------------------
// Example usage
// ----------------------------
console.log("Can editor delete?", hasPermission('editor', 'canDelete')); // false
console.log("Can admin view?", hasPermission('admin', 'canView'));       // true
