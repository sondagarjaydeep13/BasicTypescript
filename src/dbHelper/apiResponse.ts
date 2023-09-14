export function responseHandler(status: number, message: string, data: any) {
    return {
        status: status,
        message: message,
        data: data,
    }
}

export function errorHandler(status: number, message: string) {
    return {
        status: status,
        message: message,
    }
}