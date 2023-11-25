export interface Question {
    id: string,
    question: string,
    answer: string,
    placeholder: string
    value: string
}
export interface Step {
    id: string,
    title: string,
    description: string,
    questions: Question[]
}

export interface FormJson {
    content: Step[]
}

export const formJson: FormJson = {
    content: [
        {
            id: "1",
            title: 'Данные объекта',
            description: 'Описание шага 1',
            questions: [
                {
                    id: '1_1',
                    value: 'name',
                    question: 'Название объекта',
                    answer: '',
                    placeholder: ''
                },
                {
                    id: '1_2',
                    value: 'iceClass',
                    question: 'вопрос2',
                    answer: '',
                    placeholder: ''
                },
                {
                    id: '1_3',
                    value: 'maxSpeed',
                    question: 'вопрос2',
                    answer: '',
                    placeholder: ''
                },
            ]
        },
        {
            id: "2",
            title: 'шаг 2',
            description: 'Описание шага 2',
            questions: [
                {
                    id: '2_1',
                    value: 'pointOfStart',
                    question: 'вопрос2',
                    answer: '',
                    placeholder: ''
                },
                {
                    id: '2_2',
                    value: 'pointOfEnd',
                    question: 'вопрос2',
                    answer: '',
                    placeholder: ''
                },
                {
                    id: '2_3',
                    value: 'dateOfStart',
                    question: 'вопрос2',
                    answer: '',
                    placeholder: ''
                },
                {
                    id: '2_4',
                    value: 'dateOfEnd',
                    question: 'вопрос2',
                    answer: '',
                    placeholder: ''
                },
            ]
        },
    ]
}
