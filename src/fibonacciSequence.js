export const fibonacci = numb => {
    if (numb <= 1) {
        return numb;
    }
    return fibonacci(numb -1) + fibonacci(numb - 2);
}