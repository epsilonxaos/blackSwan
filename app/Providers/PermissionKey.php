<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

/**
 * ConstantExport Trait implementa el método getConstants() el cual nos permite
 * regresar las constantes de la clase como un array asociativo
 */
trait ConstantExport
{
	/**
	 * @return [const_name => 'value', ...]
	 */
	static function getConstants()
	{
		$refl = new \ReflectionClass(__CLASS__);
		return $refl->getConstants();
	}
}

class PermissionKey extends ServiceProvider
{
	use ConstantExport;

	const Admin = [
		'name' => 'Módulo administradores',
		'permissions' => [
			'index' => [
				'display_name' => 'Ver módulo',
				'name' => 'admins.index'
			],
			'create' => [
				'display_name' => 'Creación',
				'name' => 'admins.create'
			],
			'edit' => [
				'display_name' => 'Ver detalles',
				'name' => 'admins.edit'
			],
			'update' => [
				'display_name' => 'Modificar',
				'name' => 'admins.update'
			],
			'destroy' => [
				'display_name' => 'Eliminar',
				'name' => 'admins.destroy'
			],
		]
	];

	const Role = [
		'name' => 'Módulo Roles',
		'permissions' => [
			'index' => [
				'display_name' => 'Ver módulo',
				'name' => 'roles.index'
			],
			'create' => [
				'display_name' => 'Creación',
				'name' => 'roles.create'
			],
			'edit' => [
				'display_name' => 'Ver detalles',
				'name' => 'roles.edit'
			],
			'update' => [
				'display_name' => 'Modificar',
				'name' => 'roles.update'
			],
			'destroy' => [
				'display_name' => 'Eliminar',
				'name' => 'roles.destroy'
			],
		]
	];

	const General = [
		'name' => 'Módulo General (Ver/Editar)',
		'permissions' => [
			'inicio' => [
				'display_name' => 'Inicio',
				'name' => 'general.inicio'
			],
			'nosotros' => [
				'display_name' => 'Nosotros',
				'name' => 'general.nosotros'
			],
			'valores' => [
				'display_name' => 'Valores',
				'name' => 'general.valores'
			],
			'contacto' => [
				'display_name' => 'Contacto',
				'name' => 'general.contacto'
			],
			'newsletter' => [
				'display_name' => 'Newsletter',
				'name' => 'general.newsletter'
			],
		]
	];

	const Capital = [
		'name' => 'Módulo Capital',
		'permissions' => [
			'texts' => [
				'display_name' => 'Editar textos',
				'name' => 'capital.texts'
			],
			'index' => [
				'display_name' => 'Ver módulo',
				'name' => 'capital.index'
			],
			'create' => [
				'display_name' => 'Creación',
				'name' => 'capital.create'
			],
			'edit' => [
				'display_name' => 'Ver detalles',
				'name' => 'capital.edit'
			],
			'update' => [
				'display_name' => 'Modificar',
				'name' => 'capital.update'
			],
			'destroy' => [
				'display_name' => 'Eliminar',
				'name' => 'capital.destroy'
			],
		]
	];
	const Real = [
		'name' => 'Módulo Real Estate',
		'permissions' => [
			'texts' => [
				'display_name' => 'Editar textos',
				'name' => 'real.texts'
			],
			'index' => [
				'display_name' => 'Ver módulo',
				'name' => 'real.index'
			],
			'create' => [
				'display_name' => 'Creación',
				'name' => 'real.create'
			],
			'edit' => [
				'display_name' => 'Ver detalles',
				'name' => 'real.edit'
			],
			'update' => [
				'display_name' => 'Modificar',
				'name' => 'real.update'
			],
			'destroy' => [
				'display_name' => 'Eliminar',
				'name' => 'real.destroy'
			],
		]
	];

	const Hospitality = [
		'name' => 'Módulo Hospitality',
		'permissions' => [
			'texts' => [
				'display_name' => 'Editar textos',
				'name' => 'hospi.texts'
			],
			'index' => [
				'display_name' => 'Ver módulo',
				'name' => 'hospi.index'
			],
			'create' => [
				'display_name' => 'Creación',
				'name' => 'hospi.create'
			],
			'edit' => [
				'display_name' => 'Ver detalles',
				'name' => 'hospi.edit'
			],
			'update' => [
				'display_name' => 'Modificar',
				'name' => 'hospi.update'
			],
			'destroy' => [
				'display_name' => 'Eliminar',
				'name' => 'hospi.destroy'
			],
		]
	];
}
