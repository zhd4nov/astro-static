.PHONY: help install dev lint lint-fix test build check typecheck format format-check eslint eslint-fix stylelint stylelint-fix

help:
	@echo "Доступные команды:"
	@echo "  make install   Установить зависимости"
	@echo "  make dev       Запустить локальный сервер разработки"
	@echo "  make lint      Проверить типы, форматирование, код и стили"
	@echo "  make lint-fix  Исправить доступные ошибки ESLint, Stylelint и форматирование"
	@echo "  make test      Запустить тесты"
	@echo "  make build     Собрать статический сайт"
	@echo "  make check     Запустить полную проверку проекта"

install:
	npm install

dev:
	npm run dev

lint:
	$(MAKE) typecheck
	$(MAKE) format-check
	$(MAKE) eslint
	$(MAKE) stylelint

lint-fix:
	$(MAKE) eslint-fix
	$(MAKE) stylelint-fix
	$(MAKE) format

test:
	npm run test

build:
	npm run build

check:
	$(MAKE) lint
	$(MAKE) test
	$(MAKE) build

typecheck:
	npm run typecheck

format:
	npm run format

format-check:
	npm run format:check

eslint:
	npm run lint

eslint-fix:
	npx eslint . --fix

stylelint:
	npm run stylelint

stylelint-fix:
	npm run stylelint:fix
