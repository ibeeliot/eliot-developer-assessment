export interface Assessment {
    id: number;
    name: string;
    description: string;
    open_time: Date;
    close_time: Date;
    time_limit: number;
    is_locked: boolean;
    questions: Question[];
}

export interface Question {
    id: number;
    name: string;
    text: string;
    answers: string[];
}

export interface AssessmentLog {
    id: number;
    is_complete: boolean;
    start_time: Date | string;
    total_time: number;
    student: Student;
    assessment: Assessment;
}

export interface Student {
    id: number;
    name: string;
    email: string;
    school_id: string;
    // original below:
    // assessments: any[];
    // original above:
    assessments: Assessment[];
}