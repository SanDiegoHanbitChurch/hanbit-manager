import firebase from 'firebase';
import faker from 'faker';
import uuid from 'uuid';
import { range } from 'lodash';

const generateMember = () => ({
    koreanName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    englishName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    birthDate: faker.date.past(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    baptized: faker.random.boolean(),
    oneToOneTraining: faker.random.boolean(),
    discipleshipTraining: faker.random.boolean(),
    ministryTraining: faker.random.boolean(),
    ministry: faker.random.word(),
    avatar: faker.image.avatar()
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

const generateVisitor = () => {
    const family = generateFamily();

    return {
        ...family,
        visitDate: faker.date.past()
    }
}

const generateVisitorList = (numberOfVisitors) => {
    return range(numberOfVisitors).map(() => generateVisitor())
}

const generateNote = () => (
    {
        createdBy: {
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            email: faker.internet.email()
        },
        createdAt: firebase.firestore.Timestamp.fromDate(faker.date.past()),
        comment: faker.lorem.paragraph()
    }    
)

const generateNotes = (numberOfNotes) => range(numberOfNotes).map(() => generateNote())

export {
    generateMember,
    generateFamily,
    generateFamilyList,
    generateMembers,
    generateVisitorList,
    generateVisitor,
    generateNotes,
}