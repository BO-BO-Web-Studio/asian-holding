import { INews } from "../model/News";

// export const NewsData: INews[] = [
//     {
//         id: 1,
//         name: 'Выбранный нами инновационный путь определил дальнейшее развитие',
//         image: '/assets/images/news_1.png',
//         description: 'Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни.',
//         date: '22 декабря 2023'
//     },
//     {
//         id: 2,
//         name: 'Выбранный нами инновационный путь определил дальнейшее развитие',
//         image: '/assets/images/news_1.png',
//         description: 'Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни.',
//         date: '22 декабря 2023'
//     },
//     {
//         id: 3,
//         name: 'Выбранный нами инновационный путь определил дальнейшее развитие',
//         image: '/assets/images/news_1.png',
//         description: 'Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни.',
//         date: '22 декабря 2023'
//     },
//     {
//         id: 1,
//         name: 'Выбранный нами инновационный путь определил дальнейшее развитие',
//         image: '/assets/images/news_1.png',
//         description: 'Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни.',
//         date: '22 декабря 2023'
//     },
//     {
//         id: 2,
//         name: 'Выбранный нами инновационный путь определил дальнейшее развитие',
//         image: '/assets/images/news_1.png',
//         description: 'Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни.',
//         date: '22 декабря 2023'
//     },
//     {
//         id: 3,
//         name: 'Выбранный нами инновационный путь определил дальнейшее развитие',
//         image: '/assets/images/news_1.png',
//         description: 'Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни.',
//         date: '22 декабря 2023'
//     },
//     {
//         id: 1,
//         name: 'Выбранный нами инновационный путь определил дальнейшее развитие',
//         image: '/assets/images/news_1.png',
//         description: 'Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни.',
//         date: '22 декабря 2023'
//     },
//     {
//         id: 2,
//         name: 'Выбранный нами инновационный путь определил дальнейшее развитие',
//         image: '/assets/images/news_1.png',
//         description: 'Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни.',
//         date: '22 декабря 2023'
//     },
//     {
//         id: 3,
//         name: 'Выбранный нами инновационный путь определил дальнейшее развитие',
//         image: '/assets/images/news_1.png',
//         description: 'Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни.',
//         date: '22 декабря 2023'
//     },
// ]