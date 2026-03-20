import userReducer, { addUser, removeUser } from '../utils/userSlice';

describe('User Slice', () => {
  
  const initialState = null;

  test('should handle addUser action', () => {
    const newUser = {
      uid: '12345',
      email: 'test@example.com',
      displayName: 'John Doe',
      photoURL: 'https://example.com/photo.jpg'
    };

    const state = userReducer(initialState, addUser(newUser));
    expect(state).toEqual(newUser);
  });

  test('should handle removeUser action', () => {
    const currentUser = {
      uid: '12345',
      email: 'test@example.com',
      displayName: 'John Doe',
      photoURL: 'https://example.com/photo.jpg'
    };

    const state = userReducer(currentUser, removeUser());
    expect(state).toBeNull();
  });

  test('should return initial state for unknown action', () => {
    const state = userReducer(initialState, { type: 'UNKNOWN_ACTION' });
    expect(state).toBeNull();
  });

});
