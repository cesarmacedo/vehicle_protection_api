export const validateThird = (customer) => {
    const errors = [];

    customer.map(async (element) => {
        if (!element.name) {
            errors.push("Name is required");
        }
        if (!element.cpf) {
            errors.push("CPF is required");
        }
        if (!element.crlv) {
            errors.push("CRLV is required");
        }
        if (!element.vehicle) {
            errors.push("Vehicle is required");
        }
        if (!element.city) {
            errors.push("City is required");
        }
        if (!element.state) {
            errors.push("State is required");
        }

    })

    return errors;

}
