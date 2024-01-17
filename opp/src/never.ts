

function handleError(code: number, message: string): never {
    throw new Error(`${message}. Code: ${code}`)
}

handleError(404, 'Not Found');