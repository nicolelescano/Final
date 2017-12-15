function checkPrime(number) {
    if (number % 1 !== 0 || number <= 0) {
        return "not prime";
    }

    for (i = 2; i <= (number) / 2; i++) {
        if (number % i == 0) {
            return "not prime";
        }

    }
    return "prime";
}


