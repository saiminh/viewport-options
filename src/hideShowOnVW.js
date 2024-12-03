const supportedElements = ['core/spacer', 'core/separator', 'core/image', 'core/columns', 'core/group'];

function addHideOnMobileToggle(settings, name) {
  if (typeof settings.attributes !== 'undefined') {
    if ( supportedElements.indexOf(name) > -1 ) { //whichever block you want to target
      settings.attributes = Object.assign(settings.attributes, {
        hideOnMobile: {
          type: 'boolean',
          default: false
        },
        hideOnDesktop: {
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
  'viewportOptions/hide-on-mobile',
  addHideOnMobileToggle
);

const addAdvancedControls = wp.compose.createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    const { Fragment } = wp.element;
    const { ToggleControl } = wp.components;
    const { InspectorControls } = wp.blockEditor;
    const { attributes, setAttributes, isSelected } = props;

    function toggleHideClassInEditor(device) {
      let classes;
      if (props.attributes.className) {
        classes = props.attributes.className;
      } else {
        classes = '';
      }
      if (device == 'mobile') {
        if ( props.attributes.hideOnMobile ) {
          classes = classes.replace('hide-on-mobile', '');
          props.setAttributes(
            { hideOnMobile: !attributes.hideOnMobile, className: classes }
          ); 
        }
        else {
          classes = classes + ' hide-on-mobile';
          props.setAttributes(
            { hideOnMobile: !attributes.hideOnMobile, className: classes }
          ); 
        }
      }
      if (device == 'desktop') {
        if ( attributes.hideOnDesktop ) {
          classes = classes.replace('hide-on-desktop', '');
          props.setAttributes(
            { hideOnDesktop: !attributes.hideOnDesktop, className: classes }
          ); 
        }
        else {
          classes = classes + ' hide-on-desktop';
          props.setAttributes(
            { hideOnDesktop: !attributes.hideOnDesktop, className: classes }
          ); 
        }
      }
    }

    return (
      <Fragment>
        <BlockEdit {...props} />
        {isSelected && ( supportedElements.indexOf(props.name) > -1 ) && 
          <InspectorControls>
            <div style={{padding: '0 0 16px 16px'}}>
              <ToggleControl
                label={wp.i18n.__('Hide on mobile', 'viewportOptions')}
                checked={!!attributes.hideOnMobile}
                onChange= { function() { 
                  toggleHideClassInEditor('mobile');
                } }
              />
              <ToggleControl
                label={wp.i18n.__('Hide on desktop', 'viewportOptions')}
                checked={!!attributes.hideOnDesktop}
                onChange= { function() { 
                  toggleHideClassInEditor('desktop');
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
  'viewportOptions/hide-on-mobile',
  addAdvancedControls
);