// Include the Tally widget script in the <head> section of your page
<script src="https://tally.so/widgets/embed.js"></script>

// You can find the form ID in the URL of this page
// https://tally.so/forms/3joEvR/share
const formId = '3joEvR';

// Open the popup
Tally.openPopup(formId, options);

// Available options
type PopupOptions = {
  key?: string;
  layout?: 'default' | 'modal';
  width?: number;
  alignLeft?: boolean;
  hideTitle?: boolean;
  overlay?: boolean;
  emoji?: {
    text: string;
    animation: 'none' | 'wave' | 'tada' | 'heart-beat' | 'spin' | 'flash' | 'bounce' | 'rubber-band' | 'head-shake';
  };
  autoClose?: number;
  showOnce?: boolean;
  doNotShowAfterSubmit?: boolean;
  customFormUrl?: string;
  hiddenFields?: {
    [key: string]: any,
  };
  onOpen?: () => void;
  onClose?: () => void;
  onPageView?: (page: number) => void;
  onSubmit?: (payload: any) => void;
};

// Example: open a popup with default options
Tally.openPopup('3joEvR');

// Example: opening a popup as a centered modal
Tally.openPopup('3joEvR', {
  layout: 'modal', // Open as a centered modal
  width: 700, // Set the width of the modal
  autoClose: 5000, // Close the popup 5 seconds after form was submitted (in ms)
});

// Example: set custom hidden fields
Tally.openPopup('3joEvR', {
  hiddenFields: {
    ref: 'downloads',
    email: 'alice@example.com'
  }
});

// Example: customization via custom domain URL + code injection
Tally.openPopup('3joEvR', {
  customFormUrl: 'https://yourdomain.com/form',
});

// Example: use callback functions to handle events
Tally.openPopup('3joEvR', {
  onOpen: () => {
    // The popup was opened, mark the form as seen
    // ...
  },
  onClose: () => {
    // The popup was closed
    // ...
  },
  onPageView: (page: number) => {
    // Log the page view
    // ...
  },
  onSubmit: (payload: any) => {
    // Form was submitted, use the answers payload in your application
    // ...
  }
});

// Close the popup
Tally.closePopup('3joEvR');
