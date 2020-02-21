import faker from 'faker';
import uuid from 'uuid';
import { range } from 'lodash';

const generateMember = () => ({
    koreanName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    englishName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    birthDate: faker.date.past(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email()
});

const generateMembers = (numberOfMembers = 4) => {
    return range(numberOfMembers).map(() => generateMember());
}

const generateFamily = (numberOfMembers = 4) => ({
    id: uuid.v4(),
    address: `${faker.address.streetAddress()} ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
    mokjang: faker.random.words(2),
    members: generateMembers(numberOfMembers)
})

const generateFamilyList = (numberOfFamilies) => {
    return range(numberOfFamilies).map(() => generateFamily())
}

export {
    generateMember,
    generateFamily,
    generateFamilyList,
    generateMembers
}