import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'

interface User {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [editStates, setEditStates] = useState<{ [key: string]: User }>({});

    useEffect(() => {
        const fetchUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'self'));
            const dataArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as User[];

            setUsers(dataArray);

            // Initialize edit states for all users
            const initialEditStates: { [key: string]: User } = {};
            dataArray.forEach(user => {
                if (user.id) {
                    initialEditStates[user.id] = {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                    };
                }
            });
            setEditStates(initialEditStates);
        };

        fetchUsers();
    }, []);

    const handleInputChange = (userId: string, field: keyof User, value: string) => {
        setEditStates(prev => ({
            ...prev,
            [userId]: {
                ...prev[userId],
                [field]: value,
            },
        }));
    };

    const updateUser = async (userId: string, updatedData: User) => {
        const userDoc = doc(db, 'self', userId);
        await updateDoc(userDoc, updatedData);
        alert('Profile updated!');
    };

    const deleteUser = async (userId: string) => {
        await deleteDoc(doc(db, 'self', userId));
        setUsers(prev => prev.filter(user => user.id !== userId));
        alert('Profile deleted!');
    };

    return (
        <div>
            <h2>User List</h2>

            {users.map((user) => {
                const editState = editStates[user.id!];

                return (
                    <div key={user.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                        <p><strong>Email:</strong> {user.email}</p>

                        <input
                            type="text"
                            placeholder="First name"
                            value={editState?.firstName || ''}
                            onChange={(e) => handleInputChange(user.id!, 'firstName', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Last name"
                            value={editState?.lastName || ''}
                            onChange={(e) => handleInputChange(user.id!, 'lastName', e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={editState?.email || ''}
                            onChange={(e) => handleInputChange(user.id!, 'email', e.target.value)}
                        />

                        <button
                            onClick={() => {
                                if (
                                    editState?.firstName.trim() &&
                                    editState?.lastName.trim() &&
                                    editState?.email.trim()
                                ) {
                                    updateUser(user.id!, editState);
                                } else {
                                    alert('Please fill in all fields before updating.');
                                }
                            }}
                        >
                            Update Profile
                        </button>

                        <button onClick={() => deleteUser(user.id!)}>Delete User</button>
                    </div>
                );
            })}
        </div>
    );
};

export default UserList;
