export enum enumFormErrorType {
    MANDATORY,
    INCORRECT
}

export enum enumFormFieldError {
    ERROR_USER_NAME,
    ERROR_FULL_NAME,
    ERROR_EMAIL,
    ERROR_PASS,
    ERROR_REP_PASS,
    ERROR_AUTH
}

export default class FormFieldError {
    constructor(
        public field : enumFormFieldError,
        public type : enumFormErrorType,
        public message? : string
    ) {}
}