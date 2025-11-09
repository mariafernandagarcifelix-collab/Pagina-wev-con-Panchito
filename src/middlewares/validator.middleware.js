export const validateSchema = (schema) => (req, res, next) => {
    try{
        schema.parse(req.body);
        next();
    } catch (error) {
        //Creamos un objeto para mapear los errores
        const errorMessage = {}
        error.issues.forEach((issue  => {
            const field = issue.path[0];
            const message = issue.message;
            errorMessage[field] = message;
        }))
        return res.status(400).json(errorMessage);
    }
}