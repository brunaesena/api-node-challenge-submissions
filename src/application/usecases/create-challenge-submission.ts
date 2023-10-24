import { Submission } from "../../domain/entities/submission";
import { ChallengesRepository } from "../repositories/challengesRepository";
import { StudentsRepository } from "../repositories/studentsRepository";

type CreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}

export class CreateChallengeSubmission {
    constructor(
        private studentRepository: StudentsRepository,
        private challengesRepository: ChallengesRepository,
    ) {} 


    async execute({studentId, challengeId} : CreateChallengeSubmissionRequest){
        const student = await this.studentRepository.findByID(studentId)

        if (!student){
            throw new Error('Student does not exists.')
        }

        const challenge = await this.challengesRepository.findByID(challengeId)

        if (!challenge){
            throw new Error('Challenge does not exists.')
        }

        const submission = Submission.create({
            studentId,
            challengeId,
        })
        return submission;
    }
}