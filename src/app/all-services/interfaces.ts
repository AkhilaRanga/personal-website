
export interface aboutInterface {
    name: string,
    description: string[],
    emailId: string,
    linkedIn: string
}
export interface educationInterface {
    universityName: string,
    universityPlace: string,
    degree: string,
    gpa: string,
    coursework: string,
    startDate: string,
    endDate: string
}
export interface projectsInterface {
    projectName: string,
    projectDescription: string[],
    startDate: string,
    endDate: string
}
export interface experienceInterface {
    jobTitle: string,
    jobPlace: string,
    jobDescription: string[],
    startDate: string,
    endDate: string
}
export interface skillsInterface {
    skills: string[]
}