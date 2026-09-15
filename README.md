# VAIB

Django-проект для отображения маркетинговой статистики.

## Требования

- Python 3.8
- Git
- `virtualenv`

## Установка

### 1. Клонирование проекта

```bash
git clone git@github.com:weibak/vaib_diagram.git
cd vaib_diagram
```
### 2. Вирутальное окружение
```bash
sudo virtualenv -p python3.10 --prompt=vaib- venv/
source venv/bin/activate
```
### 3. Зависимости
```bash
pip install django pillow crispy-bootstrap5 psycopg2-binary
```
### 4. Запуск приложения
```bash
python manage.py migrate    
python manage.py runserver
```

## Отображние диаграмы
http://127.0.0.1:8000/chart/
