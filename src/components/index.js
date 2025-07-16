// 🎯 IMPORTS DIRECTS DEPUIS @YAM-DAISY-COMPONENTS
// Cette approche permet d'utiliser les composants directement depuis le dossier parent

// Import direct des composants les plus utilisés
export { default as Button } from '../../../@yam-daisy-components/src/components/common/Button.jsx';
export { default as Card } from '../../../@yam-daisy-components/src/components/common/Card.jsx';
export { default as Alert } from '../../../@yam-daisy-components/src/components/common/Alert.jsx';
export { default as Badge } from '../../../@yam-daisy-components/src/components/common/Badge.jsx';
export { default as Modal } from '../../../@yam-daisy-components/src/components/common/Modal.jsx';
export { default as Input } from '../../../@yam-daisy-components/src/components/common/Input.jsx';
export { default as Hero } from '../../../@yam-daisy-components/src/components/common/Hero.jsx';
export { default as Navbar } from '../../../@yam-daisy-components/src/components/common/Navbar.jsx';
export { default as Footer } from '../../../@yam-daisy-components/src/components/common/Footer.jsx';

// Import de tous les autres composants disponibles
export { default as Avatar } from '../../../@yam-daisy-components/src/components/common/Avatar.jsx';
export { default as Breadcrumbs } from '../../../@yam-daisy-components/src/components/common/Breadcrumbs.jsx';
export { default as Checkbox } from '../../../@yam-daisy-components/src/components/common/Checkbox.jsx';
export { default as Divider } from '../../../@yam-daisy-components/src/components/common/Divider.jsx';
export { default as Drawer } from '../../../@yam-daisy-components/src/components/common/Drawer.jsx';
export { default as Dropdown } from '../../../@yam-daisy-components/src/components/common/Dropdown.jsx';
export { default as FileInput } from '../../../@yam-daisy-components/src/components/common/FileInput.jsx';
export { default as Indicator } from '../../../@yam-daisy-components/src/components/common/Indicator.jsx';
export { default as Join } from '../../../@yam-daisy-components/src/components/common/Join.jsx';
export { default as Loading } from '../../../@yam-daisy-components/src/components/common/Loading.jsx';
export { default as Menu } from '../../../@yam-daisy-components/src/components/common/Menu.jsx';
export { default as Pagination } from '../../../@yam-daisy-components/src/components/common/Pagination.jsx';
export { default as Progress } from '../../../@yam-daisy-components/src/components/common/Progress.jsx';
export { default as Radio } from '../../../@yam-daisy-components/src/components/common/Radio.jsx';
export { default as Range } from '../../../@yam-daisy-components/src/components/common/Range.jsx';
export { default as Rating } from '../../../@yam-daisy-components/src/components/common/Rating.jsx';
export { default as Select } from '../../../@yam-daisy-components/src/components/common/Select.jsx';
export { default as Skeleton } from '../../../@yam-daisy-components/src/components/common/Skeleton.jsx';
export { default as Stack } from '../../../@yam-daisy-components/src/components/common/Stack.jsx';
export { default as Stat } from '../../../@yam-daisy-components/src/components/common/Stat.jsx';
export { default as Steps } from '../../../@yam-daisy-components/src/components/common/Steps.jsx';
export { default as Swap } from '../../../@yam-daisy-components/src/components/common/Swap.jsx';
export { default as Tab } from '../../../@yam-daisy-components/src/components/common/Tab.jsx';
export { default as Table } from '../../../@yam-daisy-components/src/components/common/Table.jsx';
export { default as Textarea } from '../../../@yam-daisy-components/src/components/common/Textarea.jsx';
export { default as ThemeSelector } from '../../../@yam-daisy-components/src/components/common/ThemeSelector.jsx';
export { default as Toast } from '../../../@yam-daisy-components/src/components/common/Toast.jsx';
export { default as Toggle } from '../../../@yam-daisy-components/src/components/common/Toggle.jsx';
export { default as Tooltip } from '../../../@yam-daisy-components/src/components/common/Tooltip.jsx';

/* 
🎯 UTILISATION :

import { Button, Card, Alert } from './components';

<Button variant="primary">Mon bouton</Button>
<Card>
  <Card.Body>
    <Alert variant="success">Ça marche !</Alert>
  </Card.Body>
</Card>

✅ Avantages :
- Imports directs depuis le dossier commun
- Aucune dépendance NPM
- Maintenance centralisée des composants
- Hot reload automatique sur les changements
- Tous les 38 composants disponibles
*/ 