import User from "../model/user";

/**
 * Service for book
 */
interface IUserService {
    /**
     * Load all users
     * @returns {Promise<User[]>}
     * @see User
     */
    findAll(): Promise<User[]>;
}

export default IUserService;