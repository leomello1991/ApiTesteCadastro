class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCod = 400) {
    this.message = message;
    this.statusCode = statusCod;
  }
}

export default AppError;
