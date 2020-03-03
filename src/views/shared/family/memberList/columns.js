import { concat } from 'lodash';

const visitorColumns = [
    { title: '한국이름', field: 'koreanName'},
    { title: '영어이름', field: 'englishName'},
    { title: '생일', field: 'birthDate', type: 'date'},
    { title: '전화번호', field: 'phoneNumber'},
    { title: '이메일', field: 'email'},
    { 
        title: '교육부',
        field: 'educationDept', 
        lookup: {
            1: '영아부',
            2: '유아부',
            3: '유치부',
            4: '유년부',
            5: '초등부',
            6: '중등부',
            7: '고등부',
            8: '대학부',
            9: '청년부'
        }
    },
    { title: '세례', field: 'baptized', type: 'boolean'}
];

const registeredColumns = [
    { title: '양육훈련', field: 'oneToOneTraining', type: 'boolean'},
    { title: '제자훈련', field: 'discipleshipTraining', type: 'boolean'},
    { title: '사역훈련', field: 'ministryTraining', type: 'boolean'},
    { title: '사역',  field: 'ministry'}
]

const regularColumns = concat(visitorColumns, registeredColumns)

export {
    visitorColumns,
    regularColumns
}