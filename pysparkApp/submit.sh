#!/bin/bash
spark-submit --jars /backend/shc-core-1.1.3-2.4-s_2.11-jar-with-dependencies.jar --py-files /backend/incident_historical_context.py,/backend/context.py,/backend/string_hasher.py,/backend/neighborhood_boundaries.py /backend/data_importer.py