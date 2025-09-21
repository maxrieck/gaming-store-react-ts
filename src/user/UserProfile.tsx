
import React, { useState, useEffect } from 'react';
import { useAuth } from '../firebase/useAuth';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import type { User } from '../types';
import PageLayout from '../pages/PageLayout';

const UserProfile: React.FC = () => {
    const { currentUser } = useAuth();
    const [profile, setProfile] = useState<User | null>(null);
    const [editState, setEditState] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            if (!currentUser) return;
            const userDoc = await getDoc(doc(db, 'self', currentUser.uid));
            if (userDoc.exists()) {
                const userData = { id: userDoc.id, ...userDoc.data() } as User;
                setProfile(userData);
                setEditState({
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    id: userData.id,
                    role: userData.role,
                });
            }
            setLoading(false);
        };
        fetchProfile();
    }, [currentUser]);

    const handleInputChange = (field: keyof User, value: string) => {
        setEditState(prev => prev ? { ...prev, [field]: value } : prev);
    };

    const updateUser = async () => {
        if (!editState || !editState.id) return;
        const userDoc = doc(db, 'self', editState.id);
        await updateDoc(userDoc, {
            firstName: editState.firstName,
            lastName: editState.lastName,
            email: editState.email,
        });
        alert('Profile updated!');
        setProfile(editState);
    };

    if (loading) return <div>Loading...</div>;
    if (!profile) return <div>No user profile found.</div>;

    return (
        <PageLayout>
            <h2>Your Profile</h2>
            <div className='bg-zinc-800 border m-4 p-2 space-y-2 space-x-5'>
                <p><strong>Name:</strong> {profile.firstName} {profile.lastName}</p>
                <p><strong>Email:</strong> {profile.email}</p>

                <input
                    type="text"
                    placeholder="First name"
                    value={editState?.firstName || ''}
                    onChange={e => handleInputChange('firstName', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last name"
                    value={editState?.lastName || ''}
                    onChange={e => handleInputChange('lastName', e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={editState?.email || ''}
                    onChange={e => handleInputChange('email', e.target.value)}
                />

                <div>
                    <button
                        onClick={() => {
                            if (
                                editState?.firstName.trim() &&
                                editState?.lastName.trim() &&
                                editState?.email.trim()
                            ) {
                                updateUser();
                            } else {
                                alert('Please fill in all fields before updating.');
                            }
                        }}
                        className='adminButton m-3'
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </PageLayout>
    );
};

export default UserProfile;
