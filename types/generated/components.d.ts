import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsApplyForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_apply_forms';
  info: {
    displayName: 'apply-form';
  };
  attributes: {
    description1: Schema.Attribute.Text;
    description2: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCareerHighlights extends Struct.ComponentSchema {
  collectionName: 'components_sections_career_highlights';
  info: {
    displayName: 'sections.smart-client';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCareerJobListings extends Struct.ComponentSchema {
  collectionName: 'components_sections_career_job_listings';
  info: {
    displayName: 'sections.dashboard';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    phoneImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    phonePosition: Schema.Attribute.Component<'shared.job-position', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCareerVision extends Struct.ComponentSchema {
  collectionName: 'components_sections_career_visions';
  info: {
    displayName: 'sections.cat-feature';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsDynamicZone extends Struct.ComponentSchema {
  collectionName: 'components_sections_dynamic_zones';
  info: {
    displayName: 'Dynamic Zone';
  };
  attributes: {};
}

export interface SectionsSectionHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_section_heroes';
  info: {
    displayName: 'section.hero';
  };
  attributes: {
    buttonLink: Schema.Attribute.Text;
    buttonText: Schema.Attribute.String;
    checkText: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSectionsAndroidHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections_android_heros';
  info: {
    displayName: 'sections.android-hero';
  };
  attributes: {
    backgroundGradient: Schema.Attribute.Enumeration<
      ['purple', 'blue', 'green']
    > &
      Schema.Attribute.DefaultTo<'purple'>;
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Download for Android'>;
    buttonUrl: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Download our Android app for the best mobile experience.'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'GET THE ANDROID APP'>;
  };
}

export interface SectionsSectionsAppFeatures extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections_app_features';
  info: {
    displayName: 'sections.app-features';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['dark', 'light', 'transparent']
    > &
      Schema.Attribute.DefaultTo<'dark'>;
    features: Schema.Attribute.Component<'shared.shared-feature-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    layout: Schema.Attribute.Enumeration<['grid', 'list', 'cards']> &
      Schema.Attribute.DefaultTo<'grid'>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'App Features'>;
  };
}

export interface SectionsSectionsCatIllustration
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections_cat_illustrations';
  info: {
    displayName: 'sections.cat-illustration';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reversed: Schema.Attribute.Boolean;
  };
}

export interface SectionsSectionsDashboard extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections_dashboards';
  info: {
    displayName: 'sections.dashboard';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    leftDescription: Schema.Attribute.Text;
    leftTitle: Schema.Attribute.String;
    phoneImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    phonePosition: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'center'>;
    rightDescription: Schema.Attribute.Text;
    rightTitle: Schema.Attribute.String;
  };
}

export interface SectionsSectionsDownloadCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections_download_ctas';
  info: {
    displayName: 'sections.download-cta';
  };
  attributes: {
    appStoreBadge: Schema.Attribute.Media<'images'>;
    backgroundColor: Schema.Attribute.Enumeration<
      ['dark', 'light', 'gradient']
    > &
      Schema.Attribute.DefaultTo<'gradient'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Download our Android app now and experience the difference.'>;
    googlePlayBadge: Schema.Attribute.Media<'images'>;
    primaryButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Download for Android'>;
    primaryButtonUrl: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    secondaryButtonText: Schema.Attribute.String;
    secondaryButtonUrl: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ready to Get Started?'>;
  };
}

export interface SectionsSectionsFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections_feature_grids';
  info: {
    displayName: 'sections.feature-grid';
  };
  attributes: {
    features: Schema.Attribute.Component<'shared.shared-feature-item', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSectionsFlipSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections_flip_sections';
  info: {
    displayName: 'sections.flip-section';
  };
  attributes: {
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Sign Up for The Hardware'>;
    buttonUrl: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/apply'>;
    description: Schema.Attribute.Text;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    sectionImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSectionsFooterImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections_footer_images';
  info: {
    displayName: 'sections.footer-image';
  };
  attributes: {
    altText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    footerImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SectionsSectionsImageBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections_image_banners';
  info: {
    displayName: 'sections.image-banner';
  };
  attributes: {
    alt: Schema.Attribute.String;
    height: Schema.Attribute.Integer;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    width: Schema.Attribute.Integer;
  };
}

export interface SectionsSectionsLoremIpsum extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections_lorem_ipsums';
  info: {
    displayName: 'sections.lorem-ipsum';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['dark', 'light', 'transparent']
    > &
      Schema.Attribute.DefaultTo<'dark'>;
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSectionsSmartClient extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections_smart_clients';
  info: {
    displayName: 'sections.smart-client';
  };
  attributes: {
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get Started'>;
    buttonUrl: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/apply'>;
    features: Schema.Attribute.Component<'shared.shared-feature-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    illustrationImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections_testimonials';
  info: {
    displayName: 'sections.testimonials';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'shared.shared-testimonial', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSectionsTextImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections_text_images';
  info: {
    displayName: 'sections.text-image';
  };
  attributes: {
    features: Schema.Attribute.Component<'shared.shared-feature-item', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reversed: Schema.Attribute.Boolean;
    richText: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSectionsTicker extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections_tickers';
  info: {
    displayName: 'sections.ticker';
  };
  attributes: {
    direction: Schema.Attribute.Enumeration<['forward', 'reverse']>;
    items: Schema.Attribute.Component<'shared.shared-ticker-item', true>;
    speed: Schema.Attribute.Integer;
  };
}

export interface SharedFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'footer-link';
  };
  attributes: {
    category: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedHighlight extends Struct.ComponentSchema {
  collectionName: 'components_shared_highlight_items';
  info: {
    displayName: 'highlight';
  };
  attributes: {
    description: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedJobPosition extends Struct.ComponentSchema {
  collectionName: 'components_shared_job_positions';
  info: {
    displayName: 'phone-position';
  };
  attributes: {
    applicationUrl: Schema.Attribute.String;
    department: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    location: Schema.Attribute.String;
    requirements: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_items';
  info: {
    displayName: 'navigation-item';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_buttons';
  info: {
    displayName: 'shared.button';
  };
  attributes: {
    buttonLink: Schema.Attribute.Text;
    buttonText: Schema.Attribute.String;
  };
}

export interface SharedSharedFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_feature_items';
  info: {
    displayName: 'shared.feature-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_testimonials';
  info: {
    displayName: 'shared.testimonial';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedSharedTickerItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_ticker_items';
  info: {
    displayName: 'shared.ticker-item';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.Text;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'social-link';
  };
  attributes: {
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.apply-form': SectionsApplyForm;
      'sections.career-highlights': SectionsCareerHighlights;
      'sections.career-job-listings': SectionsCareerJobListings;
      'sections.career-vision': SectionsCareerVision;
      'sections.dynamic-zone': SectionsDynamicZone;
      'sections.section-hero': SectionsSectionHero;
      'sections.sections-android-hero': SectionsSectionsAndroidHero;
      'sections.sections-app-features': SectionsSectionsAppFeatures;
      'sections.sections-cat-illustration': SectionsSectionsCatIllustration;
      'sections.sections-dashboard': SectionsSectionsDashboard;
      'sections.sections-download-cta': SectionsSectionsDownloadCta;
      'sections.sections-feature-grid': SectionsSectionsFeatureGrid;
      'sections.sections-flip-section': SectionsSectionsFlipSection;
      'sections.sections-footer-image': SectionsSectionsFooterImage;
      'sections.sections-image-banner': SectionsSectionsImageBanner;
      'sections.sections-lorem-ipsum': SectionsSectionsLoremIpsum;
      'sections.sections-smart-client': SectionsSectionsSmartClient;
      'sections.sections-testimonials': SectionsSectionsTestimonials;
      'sections.sections-text-image': SectionsSectionsTextImage;
      'sections.sections-ticker': SectionsSectionsTicker;
      'shared.footer-link': SharedFooterLink;
      'shared.highlight': SharedHighlight;
      'shared.job-position': SharedJobPosition;
      'shared.media': SharedMedia;
      'shared.navigation-item': SharedNavigationItem;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.shared-button': SharedSharedButton;
      'shared.shared-feature-item': SharedSharedFeatureItem;
      'shared.shared-testimonial': SharedSharedTestimonial;
      'shared.shared-ticker-item': SharedSharedTickerItem;
      'shared.slider': SharedSlider;
      'shared.social-link': SharedSocialLink;
    }
  }
}
