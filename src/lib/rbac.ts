import { AccessControl } from 'accesscontrol'

const ac = new AccessControl()
ac.grant('grantAdmin')
  .readAny('all')
  .createAny('all')
  .updateAny('all')
  .deleteAny('all')

  .grant('admin')
  .readAny('all')
  .createAny('all')
  .updateAny('all')
  .deleteAny('all')
