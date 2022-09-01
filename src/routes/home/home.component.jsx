import Directory from '../../component/directory/directory.component';

const Home = () => {

  const categories =[
    {
      id : 1,
      title: 'hats',
      url: 'https://media.istockphoto.com/id/1041773030/es/vector/conjunto-de-vector-plano-de-sombreros-de-hombre-y-mujer-elegantes-sombreros-masculinos-y.webp?s=2048x2048&w=is&k=20&c=EAKiLZ5RbdcbJmSWBYq73irB1kV9ryUeKvd9tUYdFgo=',
      route: 'shop/hats'
    },
    {
      id : 2,
      title: 'jackets',
      url: 'https://media.istockphoto.com/id/889023692/es/vector/caliente-ropa-casual-para-hombres-vector-iconos.webp?s=612x612&w=is&k=20&c=x6cbMQrXpWJfdWzWNCHfxJWqK8u7EZLrtOf-WqEUqU4='
    },
    {
      id : 3,
      title: 'sneakers',
      url: 'https://media.istockphoto.com/id/974771930/es/vector/vector-set-de-calzado-zapatos-con-estilo-para-hombre-y-mujer-sandalias-diferentes-%C3%A9pocas-del.webp?s=612x612&w=is&k=20&c=OStf4XnsGGMN1QzJMB414Ru0a5yqmw5rT9VmkbC1oow='
    },
    {
      id : 4,
      title: 'womens',
      url: 'https://media.istockphoto.com/id/1296144988/es/vector/cinco-mujeres-de-diferentes-etnias-y-culturas-est%C3%A1n-juntas-una-al-lado-de-la-otra-las-chicas.webp?s=612x612&w=is&k=20&c=X5ko4gReeWrq5Hgo0iL1opfr9azRMbpXvrLLnf5Z_8A='
    },
    {
      id : 5,
      title: 'mens',
      url: 'https://media.istockphoto.com/id/492529287/es/foto/retrato-de-feliz-sonriente-hombre.webp?s=612x612&w=is&k=20&c=1Re5YIZQqy800E9H6jVue0qv3TEvJXLYzmv-QncUbBo='
    },
  ];
  return (
    < Directory categories={categories}/>
  );
}

export default Home;
