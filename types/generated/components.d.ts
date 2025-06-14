import type { Schema, Struct } from '@strapi/strapi';

export interface ElementosBoton extends Struct.ComponentSchema {
  collectionName: 'components_elementos_botons';
  info: {
    displayName: 'Boton';
  };
  attributes: {
    Texto: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementosLink extends Struct.ComponentSchema {
  collectionName: 'components_elementos_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    externo: Schema.Attribute.Boolean;
    href: Schema.Attribute.String;
    texto: Schema.Attribute.String;
  };
}

export interface ElementosLogo extends Struct.ComponentSchema {
  collectionName: 'components_elementos_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    href: Schema.Attribute.String;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementosTarjeta extends Struct.ComponentSchema {
  collectionName: 'components_elementos_tarjetas';
  info: {
    displayName: 'Tarjeta';
  };
  attributes: {
    Foto: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Texto: Schema.Attribute.Text;
    Titulo: Schema.Attribute.String;
  };
}

export interface PlanoBoton extends Struct.ComponentSchema {
  collectionName: 'components_plano_botons';
  info: {
    displayName: 'boton';
  };
  attributes: {
    texto: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface PlanoCta extends Struct.ComponentSchema {
  collectionName: 'components_plano_ctas';
  info: {
    description: '';
    displayName: 'CTA';
  };
  attributes: {
    Background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Boton: Schema.Attribute.Component<'elementos.boton', false>;
    contenido: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface PlanoFooter extends Struct.ComponentSchema {
  collectionName: 'components_plano_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    links: Schema.Attribute.Component<'plano.links', true>;
    logo: Schema.Attribute.Component<'plano.logo', false>;
  };
}

export interface PlanoHeroe extends Struct.ComponentSchema {
  collectionName: 'components_plano_heroes';
  info: {
    displayName: 'Heroe';
  };
  attributes: {
    Descripcion: Schema.Attribute.Text;
    Fondo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Titulo: Schema.Attribute.String;
  };
}

export interface PlanoLinks extends Struct.ComponentSchema {
  collectionName: 'components_plano_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    href: Schema.Attribute.String;
    texto: Schema.Attribute.String;
  };
}

export interface PlanoLogo extends Struct.ComponentSchema {
  collectionName: 'components_plano_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    href: Schema.Attribute.String;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PlanoNavbar extends Struct.ComponentSchema {
  collectionName: 'components_plano_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elementos.link', true>;
    links: Schema.Attribute.Component<'elementos.link', true>;
    logo: Schema.Attribute.Component<'elementos.logo', false>;
  };
}

export interface PlanoSlider extends Struct.ComponentSchema {
  collectionName: 'components_plano_sliders';
  info: {
    description: '';
    displayName: 'Slider';
  };
  attributes: {
    Fotos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Subtitulo: Schema.Attribute.String;
    texto: Schema.Attribute.Text;
    Titulo: Schema.Attribute.String;
  };
}

export interface PlanoTarjetas extends Struct.ComponentSchema {
  collectionName: 'components_plano_tarjetas';
  info: {
    displayName: 'Tarjetas';
  };
  attributes: {
    tarjeta: Schema.Attribute.Component<'elementos.tarjeta', true>;
  };
}

export interface PlanoTextoDobleFoto extends Struct.ComponentSchema {
  collectionName: 'components_plano_texto_doble_fotos';
  info: {
    description: '';
    displayName: 'TextoDobleFoto';
  };
  attributes: {
    derecha: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    primeraFoto: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    segundaFoto: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Texto: Schema.Attribute.Text;
    Titulo: Schema.Attribute.String;
  };
}

export interface PlanoTextoFoto extends Struct.ComponentSchema {
  collectionName: 'components_plano_texto_fotos';
  info: {
    description: '';
    displayName: 'textoFoto';
  };
  attributes: {
    boton: Schema.Attribute.Component<'plano.boton', false>;
    derecha: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Foto: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Texto: Schema.Attribute.Text;
    Titulo: Schema.Attribute.String;
  };
}

export interface PlanoVideoComponente extends Struct.ComponentSchema {
  collectionName: 'components_plano_video_componentes';
  info: {
    displayName: 'VideoComponente';
  };
  attributes: {
    Descripcion: Schema.Attribute.Text;
    Titulo: Schema.Attribute.String;
    Video: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elementos.boton': ElementosBoton;
      'elementos.link': ElementosLink;
      'elementos.logo': ElementosLogo;
      'elementos.tarjeta': ElementosTarjeta;
      'plano.boton': PlanoBoton;
      'plano.cta': PlanoCta;
      'plano.footer': PlanoFooter;
      'plano.heroe': PlanoHeroe;
      'plano.links': PlanoLinks;
      'plano.logo': PlanoLogo;
      'plano.navbar': PlanoNavbar;
      'plano.slider': PlanoSlider;
      'plano.tarjetas': PlanoTarjetas;
      'plano.texto-doble-foto': PlanoTextoDobleFoto;
      'plano.texto-foto': PlanoTextoFoto;
      'plano.video-componente': PlanoVideoComponente;
    }
  }
}
