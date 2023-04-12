const supportedElements = ['core/columns', 'core/column', 'core/video', 'core/image', 'core/group', 'core/cover', 'core/row'];

function addHideOnMobileToggle(settings, name) {
  if (typeof settings.attributes !== 'undefined') {
    if ( supportedElements.indexOf(name) > -1 ) { //whichever block you want to target
      settings.attributes = Object.assign(settings.attributes, {
        halfHeightMobile: {
          type: 'boolean',
          default: false
        },
        halfHeightDesktop: {
          type: 'boolean',
          default: false
        },
        fullHeightMobile: {
          type: 'boolean',
          default: false
        },
        fullHeightDesktop: {
          type: 'boolean',
          default: false
        },
        className: {
          type: 'string',
          default: ''
        }
      });
    }
  }
  return settings;
}
wp.hooks.addFilter(
  'blocks.registerBlockType',
  'viewportOptions/full-height',
  addHideOnMobileToggle
);

const addAdvancedControls = wp.compose.createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    const { Fragment } = wp.element;
    const { ToggleControl } = wp.components;
    const { InspectorControls } = wp.blockEditor;
    const { attributes, setAttributes, isSelected } = props;

    function toggleHideClassInEditor(device, size) {
      if (!device || !size) { 
        alert('Missing device or size argument! Contact Simon to fix this.'); 
      };
      let classes;
      if (attributes.className) {
        classes = attributes.className;
      } else {
        classes = '';
      }
      classes = classes.replace(/  /g, '');
      if (device == 'mobile' && size == 'full') {
        classes.replace('is-half-height-mobile', '');
        !attributes.fullHeightMobile ? classes = classes + ' is-full-height-mobile' : classes = classes.replace('is-full-height-mobile', '');
        setAttributes( {
          fullHeightMobile: !attributes.fullHeightMobile,
          halfHeightMobile: false,
          className: classes
        } );
      }
      if (device == 'mobile' && size == 'half') {
        classes.replace('is-full-height-mobile', '');
        !attributes.halfHeightMobile ? classes = classes + ' is-half-height-mobile' : classes = classes.replace('is-half-height-mobile', '');
        setAttributes( {
          fullHeightMobile: false,
          halfHeightMobile: !attributes.halfHeightMobile,
          className: classes
        } );
      }
      if (device == 'desktop' && size == 'full') {
        classes.replace('is-half-height-desktop', '');
        !attributes.fullHeightDesktop ? classes = classes + ' is-full-height-desktop' : classes = classes.replace('is-full-height-desktop', '');
        setAttributes( {
          fullHeightDesktop: !attributes.fullHeightDesktop,
          halfHeightDesktop: false,
          className: classes
        } );
      }
      if (device == 'desktop' && size == 'half') {
        classes.replace('is-full-height-desktop', '');
        !attributes.halfHeightDesktop ? classes = classes + ' is-half-height-desktop' : classes = classes.replace('is-half-height-desktop', '');
        setAttributes( {
          fullHeightDesktop: false,
          halfHeightDesktop: !attributes.halfHeightDesktop,
          className: classes
        } );
      }
    }

    return (
      <Fragment>
        <BlockEdit {...props} />
        {isSelected && ( supportedElements.indexOf(props.name) > -1 ) && 
          <InspectorControls>
            <div style={{padding: '0 0 16px 16px'}}>
              <ToggleControl
                label={wp.i18n.__('Full height on mobile', 'viewportOptions')}
                checked={!!attributes.fullHeightMobile}
                onChange= { function() { 
                  toggleHideClassInEditor('mobile', 'full');
                } }
              />
              <ToggleControl
                label={wp.i18n.__('50% height on mobile', 'viewportOptions')}
                checked={!!attributes.halfHeightMobile}
                onChange= { function() { 
                  toggleHideClassInEditor('mobile', 'half');
                } }
              />
              <ToggleControl
                label={wp.i18n.__('Full height on desktop', 'viewportOptions')}
                checked={!!attributes.fullHeightDesktop}
                onChange= { function() { 
                  toggleHideClassInEditor('desktop', 'full');
                } }
              />
              <ToggleControl
                label={wp.i18n.__('50% height on desktop', 'viewportOptions')}
                checked={!!attributes.halfHeightDesktop}
                onChange= { function() { 
                  toggleHideClassInEditor('desktop', 'half');
                } }
              />
            </div>
          </InspectorControls>
        }
      </Fragment>
    );
  };
}, 'addAdvancedControls');
     
wp.hooks.addFilter(
  'editor.BlockEdit',
  'viewportOptions/full-height',
  addAdvancedControls
);