export interface ServicesMock {
    id: number;
    label: string;
    link: string;
}

export const servicesMock = [
    {
        id: 1,
        label: 'севрис №1',
        link: '/service1',
    },
    {
        id: 2,
        label: 'севрис №2',
        link: '/service2',
    },
    {
        id: 3,
        label: 'севрис №3',
        link: '/service3',
    },
] as ServicesMock[];