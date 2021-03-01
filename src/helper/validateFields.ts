
export const validateFields = (customer) => {
    const errors = [];

    if (!customer.name) {
        errors.push("Name is required");
    }
    if (!customer.cpf) {
        errors.push("CPF is required");
    }
    if (!customer.crlv) {
        errors.push("CRLV is required");
    }
    if (!customer.vehicle) {
        errors.push("Vehicle is required");
    }
    if (!customer.city) {
        errors.push("City is required");
    }
    if (!customer.state) {
        errors.push("State is required");
    }

    return errors;

}