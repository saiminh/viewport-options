const supportedElements = ['core/columns', 'core/row'];

function addHideOnMobileToggle(settings, name) {
  if (typeof settings.attributes !== 'undefined') {
    if ( supportedElements.indexOf(name) > -1 ) { //whichever block you want to target
      settings.attributes = Object.assign(settings.attributes, {
        reverseOnMobile: {
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
  'viewportOptions/reverseFlex',
  addHideOnMobileToggle
);

const addAdvancedControls = wp.compose.createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    const { Fragment } = wp.element;
    const { ToggleControl } = wp.components;
    const { InspectorControls } = wp.blockEditor;
    const { attributes, setAttributes, isSelected } = props;

    function toggleHideClassInEditor() {
      let classes;
      if (attributes.className) {
        classes = attributes.className;
      } else {
        classes = '';
      }
      !attributes.reverseOnMobile ? classes = classes + ' is-reversed-mobile' : classes = classes.replace('is-reversed-mobile', '');
      setAttributes( { reverseOnMobile: !attributes.reverseOnMobile, className: classes } );
    }

    return (
      <Fragment>
        <BlockEdit {...props} />
        {isSelected && ( supportedElements.indexOf(props.name) > -1 ) && 
          <InspectorControls>
            <div style={{padding: '0 0 16px 16px'}}>
              <ToggleControl
                label={wp.i18n.__('Swap container positions on mobile', 'viewportOptions')}
                checked={!!attributes.reverseOnMobile}
                onChange= { function() { 
                  toggleHideClassInEditor();
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
  'viewportOptions/reverseFlex',
  addAdvancedControls
);