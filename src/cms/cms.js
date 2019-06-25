import CMS from 'netlify-cms-app'
import {CustomInputControl, CustomInputPreview} from './preview-templates/widget1'

CMS.registerPreviewTemplate('blog', CustomInputControl, CustomInputPreview)