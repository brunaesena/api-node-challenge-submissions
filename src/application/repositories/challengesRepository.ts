import { Challenge } from "../../domain/entities/challenge";

export interface ChallengesRepository {
    findByID(id: string): Promise <Challenge | null>;
}