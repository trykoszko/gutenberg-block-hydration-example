import apiFetch from '@wordpress/api-fetch';

/**
 * Get all WordPress Users
 */
export const getAllUsers = () => {
    return apiFetch( { path: '/wp/v2/users' } )
}

/**
 * Get single WordPress User by user_id
 *
 * @param {int} user_id
 */
export const getUserById = user_id => {
    return apiFetch( { path: `/wp/v2/users/${user_id}` } )
}
