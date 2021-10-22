const express = require('express');
const { csrfProtection, asyncHandler, toolBuilder } = require('../utils');
const { User, Toolbox, Implementation, Api } = require('../db/models');
const db = require('../db/models');
const { loginUser, logoutUser } = require('../auth');
const { restoreUser, requireAuth, authorize } = require('../auth');

const router = express.Router();

router.post(
	'/',
	asyncHandler(async (req, res, next) => {
		const { api_id, toolbox_id, old_toolbox } = req.body;

		if (old_toolbox) {
			//Check if there is an existing one
			const impStatus = await db.Implementation.findOne({
				where: {
					api_id,
					toolbox_id: old_toolbox,
				},
			});

			if (impStatus) {
				const deletedImp = await impStatus.destroy();
			}
		}

		const newImp = await db.Implementation.create({
			api_id,
			toolbox_id,
		});

		res.json({ newImp });
	})
);

router.delete(
	'/',
	asyncHandler(async (req, res, next) => {
		const { api_id, toolbox_id } = req.body;

		const impStatus = await db.Implementation.findOne({
			where: {
				api_id,
				toolbox_id,
			},
		});

		if (impStatus) {
			const imp = await impStatus.destroy();
			res.status(204).end();
		} else {
			next();
		}
	})
);

module.exports = router;
